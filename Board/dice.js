class Dice {
    constructor(randomFunction) {
        if (randomFunction===undefined) {
            this.randomFunction = function() {
                return Math.floor(Math.random()*6) + 1;
            }
        }
        this.randomFunction = randomFunction;
    }
    roll() {
        this.randomFunction();
    }
};