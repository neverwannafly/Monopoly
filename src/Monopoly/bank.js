class Bank {
    constructor(gameid, bankid) {
        this.gameid = gameid;
        this.bankid = bankid;
        this.balance = 30000;     
        this.houses = 32;
        this.hotels = 12; 
    }

    getId() {
        return this.bankid;
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

};