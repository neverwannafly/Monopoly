class Player {
    constructor(tokenid, playerid, name) {
        this.tokenid = tokenid;
        this.playerid = playerid;
        this.name = name;
        this.inTrade = false;
        this.inJail = false;
        this.isBankrupt = false;
        this.properties = []; // array of propertyid's 
        this.position = 0; // current player posn. Initially they all are at zero
        this.balance = 1500;      
    }

    returnBalance() {
        return this.balance;
    }

    recieveMoney(amount) {
        this.balance += amount;
    }

    payMoney(amount) {
        this.balance -= amount;
    }

    doesOwnAllSameProps(propid) {
        return sameTypePropDict.propid in this.properties;
    }

    addProperty(propid) {
        this.properties.push(propid);
    }

};