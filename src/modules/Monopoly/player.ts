class Player {

    tokenId: number;
    playerId: number;
    name: string;
    inTrade: boolean;
    inJail: boolean;
    isBankrupt: boolean;
    properties: Array<number>;
    cards: Array<number>;
    position: number;
    balance: number;

    constructor(tokenId: number, playerId: number, name: string) {
        this.tokenId = tokenId;
        this.playerId = playerId;
        this.name = name;
        this.inTrade = false;
        this.inJail = false;
        this.isBankrupt = false;
        this.properties = []; // array of propertyid's 
        this.cards = []; // contains any commuinty chest or chance cards a player may get
        this.position = 0; // current player posn. Initially they all are at zero
        this.balance = 1500;      
    }

    getId() {
        return this.playerId;
    }

    getBalance() {
        return this.balance;
    }

    receiveMoney(amount: number) {
        this.balance += amount;
    }

    payMoney(amount: number) {
        this.balance -= amount;
    }

    ownsPropSet(propid: number) {
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

    samePropsCount(propid: number) {
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

    returnSameProps(propid: number) {
        return [...sameTypePropDict[propid]];
    }

    addProperty(propid: number) {
        this.properties.push(propid);
    }

};

export default Player;