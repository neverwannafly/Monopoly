class Card {
    constructor(id, type, description, action) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.action = action;
    }

    triggerCard() {
        this.action();
    }
};