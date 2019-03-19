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