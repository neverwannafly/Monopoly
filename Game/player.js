class Player {
    constructor(tokenid, playerid, name, dice) {
        this.tokenid = tokenid;
        this.playerid = playerid;
        this.name = name;
        this.dice = dice;
        this.inTrade = false;
        this.properties = []; // array of propertyid's 
        this.balance = 1500;   
        this.assets = {};     
    }

    rollDice() {
        this.dice.roll();
    }

    returnBalance() {
        return this.balance;
    }

    canAfford(payment) {
        return this.balance >= payment ? true : false;
    }

    recieveMoney(amount) {
        this.balance += amount;
    }

    payMoney(amount) {
        this.balance -= amount;
    }

    doesUserOwnSquare(sqaure) {

    }

};