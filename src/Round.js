const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = [];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    const outcome = turn.evaluateGuess();
    if (outcome === false) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
}

module.exports = Round;
