class Player {
    constructor(tokenid, playerid, name) {
        this.tokenid = tokenid;
        this.playerid = playerid;
        this.name = name;
        this.inTrade = false;
        this.properties = []; // array of propertyid's 
        this.balance = 1500;      
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

    doesUserOwnSquare(square) {

    }

};