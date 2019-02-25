class Game {
    constructor(playersArr, gameMode="UK") {
        this.board = boardSetup(gameMode);
        this.communityChest = cardSetup("COMMUNITY_CHEST", gameMode);
        this.chance = cardSetup("CHANCE", gameMode);
        this.dices = dicesSetup();
        // the playing order of players is same as indexing of the players array
        this.players = playerSetup(playersArr);
        // Initially player[0] will make his move
        this.currentPlayer = 0;
        this.moves = 0;
    }

};