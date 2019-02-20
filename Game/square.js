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
            // Stores if the square has a mortage value
            this.mortage = false;
            // Hotels and houses built on the square, multiplicative squares wont have any houses or hotels built on them
            this.assets = {
                houses: 0,
                hotels: 0,
            };
        }

        if (!type) {
            // A function that triggers when a player lands on an action square
            this.action = action;
        }
        
    }

    setOwner(ownerid) {
        this.ownerid = ownerid;
    }

    triggerSquare() {
        this.action();
    }

    calculateRent(args) {
        if (this.type) {
            // Additional Data can be added to args: Dictionary here.

            return this.rent(args);
        }
        throw console.error("This square doesnt generate rent");
    }

};