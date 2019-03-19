BOARD_LIMIT = 40;

class Game {
    constructor(playersArr, gameMode="UK") {
        this.board = boardSetup(gameMode);
        this.communityChest = cardSetup("COMMUNITY_CHEST", gameMode);
        this.chance = cardSetup("CHANCE", gameMode);
        this.dices = dicesSetup();
        // the playing order of players is same as indexing of the players array
        this.players = playerSetup(playersArr);
        this.playerPositions = [0, 0, 0, 0] // Initially all players start at GO
        // Initially player[0] will make his move
        this.currentPlayer = 0;
        this.moves = 0;
    }

    getPlayer() {
        return this.players[this.currentPlayer];
    }

    getProperty() {
        return this.board[this.playerPositions[this.currentPlayer]]
    }

    playerBalance() {
        return this.getPlayer().returnBalance();
    }

    propertyCost() {
        return this.getProperty().cost;
    }

    // Calculate Player's purchasing power
    calculateMortagedWorth() {
        let properties = this.getPlayer().properties;
        let mortagedValue = 0;
        for (prop of properties) {
            let worth = this.board[prop].cost;
            let isMortaged = this.board[prop].mortage;
            if (worth && !isMortaged) {
                mortagedValue += worth/2;
            }
        }
        return mortagedValue;
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
        let diceRoll = this.dices.returnDiceSum;
        incrementPlayerPosition(diceRoll);
        return diceRoll;
    }

    incrementPlayerPosition(diceRoll) {
        this.playerPositions[this.currentPlayer] += diceRoll % BOARD_LIMIT;
    }

};