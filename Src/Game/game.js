BOARD_LIMIT = 40;

class Game {
    constructor(gameid, playersArr, gameMode="UK") {
        this.gameid = gameid;
        this.board = boardSetup(gameMode);
        this.currency = getCurrency(gameMode);
        this.communityChest = cardSetup("COMMUNITY_CHEST", gameMode);
        this.chance = cardSetup("CHANCE", gameMode);
        this.dices = dicesSetup();
        this.bank = bankSetup(gameid);
        // the playing order of players is same as indexing of the players array
        this.players = playerSetup(playersArr);
        this.currentPlayer = 0; // Initially player[0] will make his move
        this.moves = 0;
        this.history = [];

        shuffleCards(this.chance.arr);
        shuffleCards(this.communityChest.arr);
    }

    getIndexById(playerId) {
        for (let pl in this.players) {
            if (this.players[pl].getId() === playerId) {
                return pl;
            }
        }
        return this.currentPlayer;
    }

    getBank() {
        return this.bank;
    }

    getPlayer(playerId=undefined) {
        return playerId ? this.players[this.getIndexById(playerId)] : this.players[this.currentPlayer];
    }

    getPlayerProperties() {
        return this.getPlayer().properties;
    }

    getProperty(propid=undefined) {
        return propid ? this.board[propid] : this.board[this.getPlayer().position];
    }

    getPlayerBalance() {
        return this.getPlayer().getBalance();
    }

    getPropertyCost() {
        return this.getProperty().getCost();
    }

    getPropertyHouseCost(propid) {
        return this.getProperty(propid).getHouseCost();
    }

    getPropertyOwner(propid) {
        return this.getPlayer(this.getProperty(propid).getOwner());
    }

    drawChance() {
        return this.chance.arr[this.chance.index++ % this.chance.arr.length].issueAction(this);
    }

    drawCommunityChest() {
        return this.communityChest.arr[this.communityChest.index++ % this.communityChest.arr.length].issueAction(this);
    }

    checkPropertyLinearity(propid, destroy=false) {
        if (!destroy) {
            let props = this.getPlayer().returnSameProps(propid);
            props.push(propid);
            this.getProperty(propid).buildHouse();
            let lowCount = 5;
            let highCount = 0;
            for (let i in props) {
                let assets = this.getProperty(props[i]).getAssets();
                if (assets < lowCount) {
                    lowCount = assets;
                }
                if (assets > highCount) {
                    highCount = assets;
                }
            }
            this.getProperty(propid).destroyHouse();
            return (highCount - lowCount <= 1) && (highCount - lowCount >=0) && (highCount<=5);
        } else {
            let props = this.getPlayer().returnSameProps(propid);
            props.push(propid);
            this.getProperty(propid).destroyHouse();
            let lowCount = 5;
            let highCount = 0;
            for (let i in props) {
                let assets = this.getProperty(props[i]).getAssets();
                if (assets < lowCount) {
                    lowCount = assets;
                }
                if (assets > highCount) {
                    highCount = assets;
                }
            }
            this.getProperty(propid).buildHouse();
            return (highCount - lowCount <= 1) && (highCount - lowCount >=0) && (highCount<=5);
        }
    }

    getPropertyRent() {
        if (this.getProperty().type!==1) {
            return 0;
        }
        let owner = this.getPropertyOwner();
        let propid = this.getProperty().getId();
        let params = {
            diceSum: this.getDiceInfo().diceSum,
            sameProps: owner.samePropsCount(propid),
            ownsPropSet: owner.ownsPropSet(propid),
        };
        let rent = this.getProperty().calculateRent(params);
        return rent;
    }

    performBankTransaction(amount, byBank=false) {
        // byBank: true means if bank needs to pay money
        if (byBank) {
            if (!this.bank.getBalance() >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer().recieveMoney(amount);
            this.getBank().payMoney(amount);
        } else {
            if (!this.getPlayerBalance() >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer().payMoney(amount);
            this.getBank().recieveMoney(amount);
        }
    }

    performPlayerTransaction(amount, otherPlayerId, isReceiving=true) {
        if (isReceiving) {
            if (!this.getPlayerBalance(otherPlayerId) >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer(otherPlayerId).payMoney(amount);
            this.getPlayer().recieveMoney(amount);
        } else {
            if (!this.getPlayerBalance() >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer().payMoney(amount);
            this.getPlayer(otherPlayerId).recieveMoney(amount);
        }
    }

    // Calculate Player's purchasing power
    calculateMortgagedWorth() {
        let properties = this.getPlayer().properties;
        let mortgagedWorth = 0;
        for (let prop in properties) {
            let worth = this.board[prop].cost;
            let isMortgaged = this.board[prop].mortgage;
            let assets = this.board[prop].assets;
            let houseCost = this.board[prop].houseCost;
            if (worth && !isMortgaged) {
                // add value of properties
                mortgagedWorth += worth/2;
                // Add house and hotel making cost. Mortgages props will have assets = 0
                mortgagedWorth += (assets * houseCost)/2;
            }
        }

        mortgagedWorth += this.playerBalance();

        return mortgagedWorth;
    }

    calculateTotalNetworth() {
        let properties = this.getPlayer().properties;
        let totalNetWorth = 0;
        for (let prop in properties) {
            let worth = this.board[prop].cost;
            let isMortgaged = this.board[prop].mortgage;
            let assets = this.board[prop].assets;
            let houseCost = this.board[prop].houseCost;
            if (worth) {
                // add value of properties
                totalNetWorth += isMortgaged ? worth/2 : worth;
                // Add house and hotel making cost. Mortgages props will have assets = 0
                totalNetWorth += assets * houseCost;
            }
        }

        totalNetWorth += this.playerBalance();

        return totalNetWorth; 
    }

    rollDice() {
        this.dices.roll();
        return this.getDiceInfo();
    }

    getDiceInfo() {
        let diceRollInfo = {
            diceSum: this.dices.returnDiceSum(),
            isRollDouble: this.dices.isRollDouble(),
            firstNumber: this.dices.returnFirstDiceNumber(),
            secondNumber: this.dices.returnSecondDiceNumber(),
        };
        return diceRollInfo;
    }

    passGo() {
        const goAmount = 200;
        let transaction = bankPaymentHandler(this, goAmount, true, function(game, amount){ 
            return {
                type: PASS_GO,
                message: `${game.getPlayer().name} gets ${game.currency}${amount} for passing GO`,
                timestamp: new Date().toLocaleString(),
            }
        });
        this.history.push(transaction);
        return transaction;
    }

    goToJail() {
        const jailPosition = 10;
        this.getPlayer().position = jailPosition;
        this.getPlayer().isInFail = true;
        let transaction = {
            type: GO_TO_JAIL,
            messgae: `${this.getPlayer().name} went to Jail`,
            timestamp: new Date().toLocaleString(),
        }
        this.history.push(transaction);
        return transaction;
    }

    canBuyProp() {
        // Ensures that performBankTransaction doesn't fail
        return this.getProperty().type===1 && this.getProperty().getOwner()===-1 && this.getPlayerBalance() > this.getPropertyCost();
    }

    buyProp() {
        let transaction = {};
        if (this.canBuyProp()) {
            transaction = bankPaymentHandler(this, this.getPropertyCost(), false, function(game, amount){
                game.getPlayer().addProperty(game.getProperty().getId());
                game.getProperty().setOwner(game.getPlayer().getId());
                return {
                    type: BUY_PROPERTY,
                    message: `${game.getPlayer().name} purchases ${game.getProperty().name} for ${game.currency}${amount}`,
                    timestamp: new Date().toLocaleString(),
                };
            });
            this.history.push(transaction);
            return transaction;
        }
        transaction.type = CANNOT_BUY_PROPERTY;
        transaction.message = `Transaction Failed as property is already bought, your funds are low or property cannot be bought.`;
        transaction.timestamp = new Date().toLocaleString();
        return transaction;
    }

    payRent() {
        let transaction = {};
        if (this.getProperty().isMortgaged()) {
            transaction.type = MOVE_SPACES;
            transaction.message = `${this.getPlayer().name} lands on a mortgaged property ${this.getProperty().name}`;
            transaction.timestamp = new Date().toLocaleString();
            this.history.push(transaction);
            return transaction;
        }

        let owner = this.getPropertyOwner();
        if (owner===this.currentPlayer) {
            transaction.type = INVALID_RESPONSE;
            transaction.message = `${this.getPlayer().name} submitted an invalid response`;
            transaction.timestamp = new Date().toLocaleString();
            this.history.push(transaction);
            return transaction;
        }

        let rent = this.getPropertyRent();
        transaction = playerPaymentHandler(this, rent, owner, false, function(game, amount, otherPlayerId){
            return {
                type: PAY_MONEY,
                message: `${game.getPlayer().name} pays ${game.currency}${amount} to ${game.getPlayer(otherPlayerId)} for ladning on ${game.getProperty()}`,
                timestamp: new Date().toLocaleString(),
            };
        });

        this.history.push(transaction);
        return transaction;
    }

    canBuildHouse(propid) {
        return this.getProperty(propid).type===1 && this.getProperty(propid).getOwner()===this.getPlayer().getId() && this.getPlayerBalance() > this.getPropertyHouseCost(propid) && (this.checkPropertyLinearity(propid));
    }

    buildHouse(propid) {
        let plyr = this.getPlayer();
        let prop = this.getProperty(propid);
        let transaction = {};

        if (!this.canBuildHouse(propid)) {
            transaction.type = CANNOT_BUILD_HOUSES;
            transaction.message = "Houses cannot be built at this property either because it's not yours, you've reached your max capacity, houses arent availabe with bank or this prop cant have houses.";
            return transaction;
        }
        
        let cost = this.getPropertyHouseCost();

        this.performBankTransaction(cost);
        prop.buildHouse();

        transaction.type = BUILD_HOUSE;
        transaction.message = `${plyr.name} built a house on ${prop.name}`;
        return transaction;
    }

    canDestroyHouse(propid) {
        return this.getProperty(propid).type===1 && this.getProperty(propid).getOwner()===this.getPlayer().getId() && (this.checkPropertyLinearity(propid, true));
    }

    destroyHouse(propid) {
        let plyr = this.getPlayer();
        let prop = this.getProperty(propid);
        let transaction = {};

        if (!this.canDestroyHouse(propid)) {
            transaction.type = CANNOT_DESTROY_HOUSES;
            transaction.message = "Houses cannot be destroyed at this property";
            return transaction;
        }
        
        let cost = this.getPropertyHouseCost()/2;

        this.performBankTransaction(cost, true);
        prop.destroyHouse();

        transaction.type = DESTROY_HOUSE;
        transaction.message = `${plyr.name} destroyed a house on ${prop.name}`;
        return transaction;
    }

    canMortgage(propid) {
        return this.getProperty(propid).type===1 && this.getProperty(propid).getOwner()===this.getPlayer().getId() && !this.getProperty().isMortgaged();
    }
    
    mortgageProperty(propid) {
        let transaction = {};
        if (!this.canMortgage(propid)) {
            transaction.type = CANNOT_MORTGAGE;
            transaction.message = `Cannot Mortgage this property`;
            return transaction;
        }

        let cost = this.getPropertyCost()/2;

        this.performBankTransaction(cost, true);
        this.getProperty(propid).mortgageProperty();

        transaction.type = Mortgage;
        transaction.message = `${this.getPlayer().name} mortgaged ${this.getProperty().name}`;
        return transaction;
    }

    canUnmortgage(propid, cost) {
        return this.getProperty(propid).type===1 && this.getProperty(propid).getOwner()===this.getPlayer().getId() && this.getProperty().isMortgaged() && this.getPlayerBalance() > cost;
    }
    
    unmortgageProperty(propid) {

        let unmortgageRate = 0.1;
        let cost = this.getPropertyCost/2 * unmortgageRate;
        let transaction = {};

        if (!this.canUnmortgage(propid, cost)) {
            transaction.type = CANNOT_UNMORTGAGE;
            transaction.message = `Cannot Mortgage this property`;
            return transaction;
        }

        this.performBankTransaction(cost);
        this.getProperty(propid).unmortgageProperty();

        transaction.type = UNMORTGAGE;
        transaction.message = `${this.getPlayer().name} unmortgaged ${this.getProperty().name}`;
        return transaction;
    }

    incrementPlayerPosition(diceRoll) {
        let initPos = this.getPlayer().position;
        this.getPlayer().position = (this.getPlayer().position + diceRoll)% BOARD_LIMIT;
        let finalPos = this.getPlayer().position;
        if (initPos + diceRoll > finalPos) {
            return this.passGo();
        }
        return {
            type: MOVE_SPACES,
            message: `${this.getPlayer().name} rolled ${diceRoll} to reach ${this.getProperty().name}`
        };
    }

    endTurn() {
        this.moves += (this.currentPlayer/this.players.length);
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }

    renderPlayArea() {
        this.drawBoard();
        console.log(this.players);
    }

    printData() {
        console.log(this.players);
    }

    // For testing Purposes

    drawBoard() {
        let board = document.getElementById("board");
        let monopolyBoard = document.createElement("table");

        monopolyBoard.innerHTML = 
        `<tr>
            <td id="20" class="cell highlight"><div class="content"><div class="bigInfo verticalCenter">${this.board[20].name}</div></div></td>
            <td id="21" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[21].color}"></div><div class="info">${this.board[21].name}<div class="cost">${this.currency}${this.board[21].cost}</div></div></td>
            <td id="22" class="cell highlight"><div class="content row2"><div class="bigInfo verticalCenter">${this.board[22].name}</div></td>
            <td id="23" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[23].color}"></div><div class="info">${this.board[23].name}<div class="cost">${this.currency}${this.board[23].cost}</div></div></div></td>
            <td id="24" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[24].color}"></div><div class="info">${this.board[24].name}<div class="cost">${this.currency}${this.board[24].cost}</div></div></div></td>
            <td id="25" class="cell highlight"><div class="content row2"><div class="bigInfo">${this.board[25].name}<div class="cost">${this.currency}${this.board[25].cost}</div></div></div></td>
            <td id="26" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[26].color}"></div><div class="info">${this.board[26].name}<div class="cost">${this.currency}${this.board[26].cost}</div></div></div></td>
            <td id="27" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[27].color}"></div><div class="info">${this.board[27].name}<div class="cost">${this.currency}${this.board[27].cost}</div></div></div></td>
            <td id="28" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[28].color}"></div><div class="info">${this.board[28].name}<div class="cost">${this.currency}${this.board[28].cost}</div></div></div></td>
            <td id="29" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[29].color}"></div><div class="info">${this.board[29].name}<div class="cost">${this.currency}${this.board[29].cost}</div></div></div></td>
            <td id="30" class="cell highlight"><div class="content"><div class="bigInfo verticalCenter">${this.board[30].name}</div></div></td>
        </tr>
        <tr>
            <td id="19" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[19].color}"></div><div class="info">${this.board[19].name}<div class="cost">${this.currency}${this.board[19].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="31" class="cell highlight"><div class="content row3"><div class="color" style="background-color:#${this.board[31].color}"></div><div class="info">${this.board[31].name}<div class="cost">${this.currency}${this.board[31].cost}</div></div></div></td>
        </tr>
        <tr>
            <td id="18" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[18].color}"></div><div class="info">${this.board[18].name}<div class="cost">${this.currency}${this.board[18].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="32" class="cell highlight"><div class="content row3"><div class="color" style="background-color:#${this.board[32].color}"></div><div class="info">${this.board[32].name}<div class="cost">${this.currency}${this.board[32].cost}</div></div></div></td>
        </tr>
        <tr>
            <td id="17" class="cell highlight"><div class="content row1"><div class="bigInfo verticalCenter">${this.board[17].name}</div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="33" class="cell highlight"><div class="content row3"><div class="bigInfo verticalCenter">${this.board[33].name}</div></div></td>
        </tr>
        <tr>
            <td id="16" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[16].color}"></div><div class="info">${this.board[16].name}<div class="cost">${this.currency}${this.board[16].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="34" class="cell highlight"><div class="content row3"><div class="color" style="background-color:#${this.board[34].color}"></div><div class="info">${this.board[34].name}<div class="cost">${this.currency}${this.board[34].cost}</div></div></div></td>
        </tr>
        <tr>
            <td id="15" class="cell highlight"><div class="content row1"><div class="bigInfo">${this.board[15].name}<div class="cost">${this.currency}${this.board[15].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="35" class="cell highlight"><div class="content row3"><div class="bigInfo">${this.board[35].name}<div class="cost">${this.currency}${this.board[35].cost}</div></div></div></td>
        </tr>
        <tr>
            <td id="14" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[14].color}"></div><div class="info">${this.board[14].name}<div class="cost">${this.currency}${this.board[14].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="36" class="cell highlight"><div class="content row3"><div class="info verticalCenter">${this.board[36].name}</div></div></td>
        </tr>
        <tr>
            <td id="13" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[13].color}"></div><div class="info">${this.board[13].name}<div class="cost">${this.currency}${this.board[13].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="37" class="cell highlight"><div class="content row3"><div class="color" style="background-color:#${this.board[37].color}"></div><div class="info">${this.board[37].name}<div class="cost">${this.currency}${this.board[37].cost}</div></div></div></td>
        </tr>
        <tr>
            <td id="12" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[12].color}"></div><div class="info">${this.board[12].name}<div class="cost">${this.currency}${this.board[12].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="38" class="cell highlight"><div class="content row3"><div class="bigInfo">${this.board[38].name}<div class="cost">${this.currency}${this.board[38].penalty}</div></div></div></td>
        </tr>
        <tr>
            <td id="11" class="cell highlight"><div class="content row1"><div class="color" style="background-color:#${this.board[11].color}"></div><div class="info">${this.board[11].name}<div class="cost">${this.currency}${this.board[11].cost}</div></div></div></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td class="cell empty"></td>
            <td id="39" class="cell highlight"><div class="content row3"><div class="color" style="background-color:#${this.board[39].color}"></div><div class="info">${this.board[39].name}<div class="cost">${this.currency}${this.board[39].cost}</div></div></div></td>
        </tr>
        <tr>
            <td id="10" class="cell highlight"><div class="content"><div class="bigInfo verticalCenter">${this.board[10].name}</div></div></td>
            <td id="9" class="cell highlight"><div class="content"><div class="color" style="background-color:#${this.board[9].color}"></div><div class="info">${this.board[9].name}<div class="cost">${this.currency}${this.board[9].cost}</div></div></div></td>
            <td id="8" class="cell highlight"><div class="content"><div class="color" style="background-color:#${this.board[8].color}"></div><div class="info">${this.board[8].name}<div class="cost">${this.currency}${this.board[8].cost}</div></div></div></td>
            <td id="7" class="cell highlight"><div class="content"><div class="bigInfo verticalCenter">${this.board[7].name}</div></div></td>
            <td id="6" class="cell highlight"><div class="content"><div class="color" style="background-color:#${this.board[6].color}"></div><div class="info">${this.board[6].name}<div class="cost">${this.currency}${this.board[6].cost}</div></div></div></td>
            <td id="5" class="cell highlight"><div class="content"><div class="bigInfo">${this.board[5].name}<div class="cost">${this.currency}${this.board[5].cost}</div></div></div></td>
            <td id="4" class="cell highlight"><div class="content"><div class="bigInfo">${this.board[4].name}<div class="cost">${this.currency}${this.board[4].penalty}</div></div></div></td>
            <td id="3" class="cell highlight"><div class="content"><div class="color" style="background-color:#${this.board[3].color}"></div><div class="info">${this.board[3].name}<div class="cost">${this.currency}${this.board[3].cost}</div></div></div></td>
            <td id="2" class="cell highlight"><div class="content"><div class="bigInfo verticalCenter">${this.board[2].name}</div></div></td>
            <td id="1" class="cell highlight"><div class="content"><div class="color" style="background-color:#${this.board[1].color}"></div><div class="info">${this.board[1].name}<div class="cost">${this.currency}${this.board[1].cost}</div></div></div></td>
            <td id="0" class="cell highlight"><div class="content"><div class="bigInfo verticalCenter">${this.board[0].name}</div></div></td>
        </tr>`;

        board.appendChild(monopolyBoard);
    }

};