class Game {
    constructor() {
        this.board = boardSetup();
        this.communityChest = cardSetup("COMMUNITY_CHEST");
        this.chance = cardSetup("CHANCE");
        this.dice = diceSetup();
    }
};