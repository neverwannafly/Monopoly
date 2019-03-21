BOARD_LIMIT = 40;

class Game {
    constructor(playersArr, gameMode="UK") {
        this.board = boardSetup(gameMode);
        this.currency = getCurrency(gameMode);
        this.communityChest = cardSetup("COMMUNITY_CHEST", gameMode);
        this.chance = cardSetup("CHANCE", gameMode);
        this.dices = dicesSetup();
        // the playing order of players is same as indexing of the players array
        this.players = playerSetup(playersArr);
        this.currentPlayer = 0; // Initially player[0] will make his move
        this.losers = []; //array containing list of lost players
        this.moves = 0;
    }

    getPlayer() {
        return this.players[this.currentPlayer];
    }

    getProperty() {
        return this.board[this.players[this.currentPlayer].position];
    }

    getPlayerBalance() {
        return this.getPlayer().returnBalance();
    }

    getPropertyCost() {
        return this.getProperty().cost;
    }

    // Calculate Player's purchasing power
    calculateMortagedWorth() {
        let properties = this.getPlayer().properties;
        let mortagedWorth = 0;
        for (prop in properties) {
            let worth = this.board[prop].cost;
            let isMortaged = this.board[prop].mortage;
            let assets = this.board[prop].assets;
            let houseCost = this.board[prop].houseCost;
            if (worth && !isMortaged) {
                // add value of properties
                mortagedWorth += worth/2;
                // Add house and hotel making cost. Mortages props will have assets = 0
                mortagedWorth += assets * houseCost;
            }
        }

        mortagedWorth += this.playerBalance();

        return mortagedWorth;
    }

    calculateTotalNetworth() {
        let properties = this.getPlayer().properties;
        let totalNetWorth = 0;
        for (prop of properties) {
            let worth = this.board[prop].cost;
            let isMortaged = this.board[prop].mortage;
            let assets = this.board[prop].assets;
            let houseCost = this.board[prop].houseCost;
            if (worth) {
                // add value of properties
                totalNetWorth += isMortaged ? worth/2 : worth;
                // Add house and hotel making cost. Mortages props will have assets = 0
                totalNetWorth += assets * houseCost;
            }
        }

        totalNetWorth += this.playerBalance();

        return totalNetWorth; 
    }

    canBuyProp() {
        return this.playerBalance() > this.propertyCost();
    }

    returnPropertyOwner() {
        return this.getProperty().returnOwner();
    }

    buyProperty() {
        if (this.canBuyProp()) {
            this.getPlayer().addProperty(this.getProperty().id);
            this.getPlayer().payMoney(this.getProperty().cost);
            this.getProperty().setOwner(this.currentPlayer);
            return true;
        }
        return false;
    }

    rollDice() {
        this.dices.roll();
        let diceRollInfo = {
            diceSum: this.dices.returnDiceSum(),
            isRollDouble: this.dices.isRollDouble(),
            firstNumber: this.dices.returnFirstDiceNumber(),
            secondNumber: this.dices.returnSecondDiceNumber(),
        };
        return diceRollInfo;
    }

    incrementPlayerPosition(diceRoll) {
        this.players[this.currentPlayer].position = (this.players[this.currentPlayer].position + diceRoll)% BOARD_LIMIT;
    }

    endTurn() {
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }

    renderPlayArea() {
        this.drawBoard();
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