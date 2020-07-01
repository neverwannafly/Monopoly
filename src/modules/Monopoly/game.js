BOARD_LIMIT = 40;

class Game {
    constructor(gameid, playersArr, gameMode="UK") {
        this.gameid = gameid;
        this.board = boardSetup(gameMode);
        this.currency = getCurrency(gameMode);
        this.communityChest = cardSetup("COMMUNITY_CHEST", gameMode);
        this.chance = cardSetup("CHANCE", gameMode);
        this.card = null // contains the most recent drawn card
        this.dices = dicesSetup();
        this.bank = bankSetup(gameid);
        // the playing order of players is same as indexing of the players array
        this.players = playerSetup(playersArr);
        this.currentPlayer = 0; // Initially player[0] will make his move
        this.moves = 0;
        this.history = [];
        this.pending = []; // Array of pending transactions that must be cleared before a turn ends

        shuffleCards(this.chance.arr);
        shuffleCards(this.communityChest.arr);
    }

    getTimestamp() {
        return Date().toLocaleString();
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
        this.card = this.chance.arr[this.chance.index++ % this.chance.arr.length]
        return {
            type: PICK_CHANCE,
            message: this.card.description,
            timestamp: this.getTimestamp(),
        }
    }

    drawCommunityChest() {
        this.card = this.communityChest.arr[this.communityChest.index++ % this.communityChest.arr.length];
        return {
            type: PICK_COMMUNITY_CHEST,
            message: this.card.description,
            timestamp: this.getTimestamp(),
        } 
    }

    clearCard() {
        this.card = null;
    }

    triggerCard() {
        return this.card.issueAction(this);
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
            this.getPlayer().receiveMoney(amount);
            this.getBank().payMoney(amount);
        } else {
            if (!this.getPlayerBalance() >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer().payMoney(amount);
            this.getBank().receiveMoney(amount);
        }
    }

    performPlayerTransaction(amount, otherPlayerId, isReceiving=true) {
        if (isReceiving) {
            if (!this.getPlayerBalance(otherPlayerId) >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer(otherPlayerId).payMoney(amount);
            this.getPlayer().receiveMoney(amount);
        } else {
            if (!this.getPlayerBalance() >= amount) {
                throw INSUFFICIENT_FUNDS;
            }
            this.getPlayer().payMoney(amount);
            this.getPlayer(otherPlayerId).receiveMoney(amount);
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
            firstNumber: this.dices.returnFirstDiceNumber(),
            secondNumber: this.dices.returnSecondDiceNumber(),
        };
        return {
            type: this.dices.isRollDouble() ? ROLL_DOUBLE : ROLL_DICE,
            info: diceRollInfo,
            timestamp: this.getTimestamp(),
        }
    }

    passGo() {
        const goAmount = 200;
        let transaction = bankPaymentHandler(this, goAmount, true, function(game, amount){ 
            return {
                type: PASS_GO,
                message: `${game.getPlayer().name} gets ${game.currency}${amount} for passing GO`,
                timestamp: game.getTimestamp(),
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
            timestamp: this.getTimestamp(),
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
                    timestamp: this.getTimestamp(),
                };
            });
            this.history.push(transaction);
            return transaction;
        }
        transaction.type = CANNOT_BUY_PROPERTY;
        transaction.message = `Transaction Failed as property is already bought, your funds are low or property cannot be bought.`;
        transaction.timestamp = this.getTimestamp();
        return transaction;
    }

    payRent() {
        let transaction = {};
        if (this.getProperty().isMortgaged()) {
            transaction.type = MOVE_SPACES;
            transaction.message = `${this.getPlayer().name} lands on a mortgaged property ${this.getProperty().name}`;
            transaction.timestamp = this.getTimestamp();
            this.history.push(transaction);
            return transaction;
        }

        let owner = this.getPropertyOwner();
        if (owner===this.currentPlayer) {
            transaction = invalidResponseHandler(game);
            this.history.push(transaction);
            return transaction;
        }

        let rent = this.getPropertyRent();
        transaction = playerPaymentHandler(this, rent, owner, false, function(game, amount, otherPlayerId){
            return {
                type: PAY_MONEY,
                message: `${game.getPlayer().name} pays ${game.currency}${amount} to ${game.getPlayer(otherPlayerId)} for ladning on ${game.getProperty()}`,
                timestamp: this.getTimestamp(),
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
        this.getPlayer().position = (this.getPlayer().position + diceRoll + 40) % BOARD_LIMIT;
        let finalPos = this.getPlayer().position;
        if (initPos + diceRoll > finalPos) {
            return this.passGo();
        }
        return {
            type: MOVE_SPACES,
            message: `${this.getPlayer().name} lands on ${this.getProperty().name}`,
            timestamp: this.getTimestamp(),
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

};

export default Game;