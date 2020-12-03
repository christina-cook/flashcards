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
    // if (turn.evaluateGuess() === false) {
    //   this.incorrectGuesses.push(currentCard.id) // this pushes the id when evaluateGuess === true for some reason
    // }
    //console.log(this.incorrectGuesses)
    this.returnCurrentCard();
    return turn.giveFeedback(); // only returning feedback when the answer is incorrect
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
}

module.exports = Round;
