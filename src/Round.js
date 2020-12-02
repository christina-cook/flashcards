class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = 0
  }

  takeTurn() {
    this.turns++;
  }

  returnCurrentCard() {
    // console.log(this.deck.cards[0]);
    return this.deck.cards[0];
  }
}

module.exports = Round;
