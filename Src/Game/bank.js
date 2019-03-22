class Bank {
    constructor(bankid) {
        this.bankid = bankid;
        this.name = name;
        this.balance = 1500;      
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