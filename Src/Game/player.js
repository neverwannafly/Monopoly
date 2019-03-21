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

    getId() {
        return this.playerid;
    }

    getBalance() {
        return this.balance;
    }

    recieveMoney(amount) {
        this.balance += amount;
    }

    payMoney(amount) {
        this.balance -= amount;
    }

    ownsPropSet(propid) {
        let found = 0;
        let lookupProps = sameTypePropDict[propid];
        for (let i in lookupProps) {
            for (let j in this.properties) {
                if (lookupProps[i]==this.properties[j]) {
                    found++;
                }
            }
        }
        return lookupProps.length === found;
    }

    samePropsCount(propid) {
        let count = 1;
        let lookupProps = sameTypePropDict[propid];
        for (let i in lookupProps) {
            for (let j in this.properties) {
                if (lookupProps[i]===this.properties[j]) {
                    count++;
                }
            }
        }
        return count;
    }

    returnSameProps(propid) {
        return [...sameTypePropDict[propid]];
    }

    addProperty(propid) {
        this.properties.push(propid);
    }

};