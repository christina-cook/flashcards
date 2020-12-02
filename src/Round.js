class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = 0
  }

  takeTurn() {
    this.turns++;
    this.deck.cards.shift();
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }
}

module.exports = Round;
