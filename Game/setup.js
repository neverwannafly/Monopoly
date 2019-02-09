function boardSetup(gameMode="UK") {
    let board = [];
    let boardMap = gameModes[gameMode]["locations"];

    // type 1 sqaures

    for (let key in boardMap) {
        let square = new Square(1, key, boardMap[key]["title"], boardMap[key]["picture"], boardMap[key]["color"], boardMap[key]["value"], boardMap[key]["housePrice"], rentScheme[key])
        board[key] = square;
    }

    // type 0 : corner squares

    board[0] = new Square(0, 0, "GO", "assets/common/go.jpg", action = function(args){
        // collect money when someone passes go
    });
    board[10] = new Square(0, 9, "JAIL", "assets/common/jail.jpg", action = function(args){
        // Do nothing if player comes to jail directly
    });
    board[20] = new Square(0, 14, "FREE PARKING", "assets/common/parking.jpg", action = function(args){
        // Player recieves unit 20 money
    });
    board[30] = new Square(0, 19, "GO TO JAIL", "assets/common/gojail.jpg", action = function(args){
        // Player doesnt pass go and goes directly to Jail.
    });

    // type 0 : tax squares

    board[4] = new Square(0, 3, "Income Tax", "assets/common/incometax.jpg", action = function(args) {
        // Player gets a deduction of 200 units of money
    });
    board[38] = new Square(0, 38, "Luxury Tax", "assets/common/luxurytax.jpg", action = function(args) {
        // Player gets a deduction of 100 units of money
    });

    // type 0 : community chest

    board[2] = new Square(0, 2, "Community Chest", "assets/common/communitychest.jpg", action = function(args) {
        // open a community chest
    });
    board[17] = new Square(0, 17, "Community Chest", "assets/common/communitychest.jpg", action = function(args) {
        // open a community chest
    });
    board[33] = new Square(0, 33, "Community Chest", "assets/common/communitychest.jpg", action = function(args) {
        // open a community chest
    });

    // type 0 : chance

    board[7] = new Square(0, 7, "Chance", "assets/common/chance.jpg", action = function(args) {
        // open a Chance
    });
    board[22] = new Square(0, 22, "Chance", "assets/common/chance.jpg", action = function(args) {
        // open a Chance
    });
    board[36] = new Square(0, 36, "Chance", "assets/common/chance.jpg", action = function(args) {
        // open a Chance
    });

    return board;
}

function cardSetup(type, gameMode="UK") {
    let cards = [];
    let cardDict = CARDS[type](gameMode);
    for (let key in cardDict) {
        let card = new Card(key, type, cardDict[key]["desc"], cardDict[key]["action"]);
        cards.push(card);
    }
    return cards;
}

function diceSetup() {
    let dice = [];
    for (let i=0; i<2; i++) {
        dice[i] = new Dice();
    }
    return dice;
}

function playerSetup(playersArr, dice) {
    let players = [];
    for (let i=0; i<playersArr.lenth; i++) {
        players[i] = new Player(playersArr[i].tokenid, i+1, playersArr[i].name, dice);
    }
    return players;
}