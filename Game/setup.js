function boardSetup(gameMode="UK") {
    let board = [];
    let boardMap = gameModes[gameMode]["locations"];
    let action = function() {

    };
    for (let key in boardMap) {
        let square = new Square(1, key, boardMap[key]["title"], boardMap[key]["picture"], boardMap[key]["color"], boardMap[key]["value"], boardMap[key]["housePrice"], rentScheme[key])
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

function playerSetup(playersArr, dice) {
    let players = [];
    for (let i=0; i<playersArr.lenth; i++) {
        players[i] = new Player(playersArr[i].tokenid, i+1, playersArr[i].name, dice);
    }
    return players;
}