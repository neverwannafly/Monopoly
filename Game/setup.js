function boardSetup(gameMode="UK") {
    let board = [];
    let boardMap = gameModes[gameMode]["locations"];
    let action = function() {

    };
    for (let key in boardMap) {
        let square = new Square(key, boardMap[key]["title"], boardMap[key]["value"], boardMap[key]["housePrice"], boardMap[key]["picture"], boardMap[key]["color"], rentScheme[key], action)
        board.push(square);
    }
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