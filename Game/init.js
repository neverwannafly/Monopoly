let playersArr = [{
    tokenid: 0, 
    name: "Shubham"
}, {
    tokenid: 2,
    name: "Nemank"
}, {
    tokenid: 3,
    name: "Vignesh"
}, {
    tokenid: 1,
    name: "Rohan"
}];

let game = new Game(playersArr, "USA")

game.renderPlayArea();