class Game {
    constructor(playersArr, playingOrder) {
        this.board = boardSetup();
        this.communityChest = cardSetup("COMMUNITY_CHEST");
        this.chance = cardSetup("CHANCE");
        this.dice = diceSetup();
        // this.players = playerSetup(playersArr, this.dice);
        // the playing order of players is same as indexing of the players array
        this.currentPlayer = 0;
        // Initially player[0] will make his move
        this.moves = 0;
    }
};