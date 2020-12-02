class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = 0
  }

  takeTurn() {
    this.turns++;
  }

  // returnCurrentCard() {
  //
  // }
}

module.exports = Round;
