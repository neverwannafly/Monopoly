class Bank {

  gameId: number;
  bankId: number;
  balance: number;
  houses: number;
  hotels: number;

  constructor(gameId: number, bankId: number) {
    this.gameId = gameId;
    this.bankId = bankId;
    this.balance = 30000;     
    this.houses = 32;
    this.hotels = 12; 
  }

  recieveMoney(amount: number) {
    this.balance += amount;
  }

  payMoney(amount: number) {
    this.balance -= amount;
  }

};

export default Bank;