// Defines a square on the monopoly board
class Square {
    constructor(type, id, name, picture, color = null, cost = null, houseCost = null, rent = null, action = null) {
        // Tells if the square is a normal (old kent road),multiplicative(stations, utilities) square or action squares (taxes, pass GO, jail etc)
        // 1 indicates a multiplicative or normal property square. 0 indicates an action square
        this.type = type;

        // Index of the square 
        this.id = id;

        // Name of the square
        this.name = name;

        // Contains a jpeg picture path for the property
        this.picture = picture;

        // token id of player currently on the square; -1 if none
        this.token = -1;

        if (type) {
            // Color of the property
            this.color = color;
            // Cost to buy the property
            this.cost = cost;
            // Cost of house
            this.houseCost = houseCost;
            // A function that calculates rent based on assets data, number of utilities owned or sum obtained from dice roll. 
            this.rent = rent; 
            // If the square has an owner, his/her id is stored here; -1 if none
            this.owner = -1;  
            // Stores if the square has a mortgage value
            this.mortgage = false;
            // Hotels and houses built on the square, multiplicative squares wont have any houses or hotels built on them
            this.assets = 0;

            this.action = function(game) {
                return {
                    type: NO_ACTION,
                    message: "No action taken",
                };
            }
        }

        if (!type) {
            // When player lands on luxury tax or income tax
            this.penalty = cost;
            // A function that triggers when a player lands on an action square
            this.action = action;
        }
        
    }

    setOwner(ownerid) {
        this.owner = ownerid;
    }

    getId() {
        return this.id;
    }

    getOwner() {
        return this.owner;
    }

    getCost() {
        return this.cost;
    }

    getHouseCost() {
        return this.houseCost;
    }

    getAssets() {
        return this.assets;
    }

    buildHouse() {
        this.assets += 1;
    }

    destroyHouse() {
        this.assets -= 1;
    }

    isMortgaged() {
        return this.mortgage;
    }

    mortgageProperty() {
        this.mortgage = true;
    }

    unmortgageProperty() {
        this.mortgage = false;
    }

    calculateRent(params) {
        if (this.rent == undefined) {
            return 0;
        }
        if (this.rent.length===2) {
            let diceSum = params.diceSum;
            return this.rent[params.sameProps] * diceSum;
        } else if (this.rent.length===4) {
            return this.rent[params.sameProps];
        } else {
            if (this.assets===0 && params.ownsPropSet) {
                return this.rent[0] * 2;
            }
            return this.rent[this.assets];
        }
    }

    assignAction(action) {
        this.action = action;
    }

    issueAction(game) {
        this.action(game);
    }

};