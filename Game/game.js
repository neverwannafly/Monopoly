class Game {
    constructor(playersArr) {
        this.board = boardSetup();
        this.communityChest = cardSetup("COMMUNITY_CHEST");
        this.chance = cardSetup("CHANCE");
        this.dices = dicesSetup();
        // the playing order of players is same as indexing of the players array
        this.players = playerSetup(playersArr);
        // Initially player[0] will make his move
        this.currentPlayer = 0;
        this.moves = 0;
    }

};