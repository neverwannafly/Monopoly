class Dices {

  randomFunctions: Array<() => number>;
  randomNumbers: Array<number>;
  

  constructor(randomFunctions: Array<() => number>) {
    this.randomFunctions = randomFunctions;
    this.randomNumbers = new Array(randomFunctions.length).fill(0);
  }
  
  roll() {
    for (let idx = 0; idx < this.randomFunctions.length; idx += 1) {
      this.randomNumbers[idx] = this.randomFunctions[idx]();
    }
  }

  getDiceSum() {
    return this.randomNumbers.reduce((total, num) => total + num);
  }

};

export default Dices;