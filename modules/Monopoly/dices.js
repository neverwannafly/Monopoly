class Dices {
    constructor(randomFunction1, randomFunction2) {

        this.randomFunction1 = randomFunction1;
        this.randomFunction2 = randomFunction2;

        this.randomNumber1 = 0;
        this.randomNumber2 = 0;

    }
    
    roll() {
        this.randomNumber1 = this.randomFunction1();
        this.randomNumber2 = this.randomFunction2();
    }

    returnDiceSum() {
        return this.randomNumber1 + this.randomNumber2;
    }

    isRollDouble() {
        return this.randomNumber1 === this.randomNumber2;
    }
    
    returnFirstDiceNumber() {
        return this.randomNumber1;
    }

    returnSecondDiceNumber() {
        return this.randomNumber2;
    }

};