class Game {
    constructor() {
        this.board = boardSetup();
        this.communityChest = cardSetup("COMMUNITY_CHEST");
        this.chance = cardSetup("CHANCE");
        this.dice = diceSetup();
    }

    roll() {
        return [this.dice[0].roll(), this.dice[1].roll()];
    }

};