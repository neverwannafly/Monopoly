// Defines a square on the monopoly board
class Square {
    constructor(id, name, assets, rent, action) {
        // Index of the square 
        this.id = id;
        // Name of the square
        this.name = name;
        // Hotels and houses built on the square
        this.assets = assets;
        // A function that calculates rent based on assets data
        this.rent = rent;
        // A function that triggers when a player lands on a square
        this.action = action;
        // If the square has an owner, his/her id is stored here; -1 if none
        this.owner = -1;
        // Stores if the square has a mortage value
        this.mortage = false;
        // token id of player currently on the square; -1 if none
        this.token = -1;
    }

    setOwner(ownerid) {
        this.ownerid = ownerid;
    }

    triggerSquare() {
        this.action();
    }

};