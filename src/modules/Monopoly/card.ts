class Card {

  id: number;
  type: number;
  description: string;
  action: (Game) => void;

  constructor(id, type, description, action) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.action = action;
  }

  issueAction(game) {
    return this.action(game);
  }
};

// Methods on Card objects

// Shuffles a card array using Fisher–Yates shuffle Algorithm
// Used to shuffle chance and community chest cards
function shuffleCards(cards: [Card]) {
    let size = cards.length;
    for (let i = size-1; i>=0; i--) {
        let randNumber = Math.floor(Math.random() * size);
        let temp = cards[i];
        // Swap
        cards[i] = cards[randNumber];
        cards[randNumber] = temp;
    }
}