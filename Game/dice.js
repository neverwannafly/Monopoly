class Dice {
    constructor(randomFunction) {
        if (randomFunction===undefined) {
            this.randomFunction = function() {
                return Math.floor(Math.random()*6) + 1;
            }
        } else {
            this.randomFunction = randomFunction;
        }
    }
    
    roll() {
        return this.randomFunction();
    }
};