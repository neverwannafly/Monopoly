function boardSetup(region="UK") {
    let board = [];
    return board;
}

function cardSetup(type, region="UK") {
    return CARDS[type](region);
}

function diceSetup() {
    let dice = [];
    for (let i=0; i<2; i++) {
        dice[i] = new Dice();
    }
    return dice;
}