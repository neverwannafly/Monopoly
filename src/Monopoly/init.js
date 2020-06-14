let playersArr = [{
    id: 15432,
    tokenid: 0, 
    name: "Shubham"
}, {
    id: 17689,
    tokenid: 2,
    name: "Nemank"
}, {
    id: 77892,
    tokenid: 3,
    name: "Vignesh"
}, {
    id: 55432,
    tokenid: 1,
    name: "Spandan"
}];

let gameid = 54678;
let game = new Game(gameid, playersArr, "USA")

game.renderPlayArea();