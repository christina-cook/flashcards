const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = [];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[this.turns]); // how do I indicate which card?
    // need to instantiate a new Turn when this
    // method is called
    this.turns++;
    //turn.evaluateGuess();
    //if turn.evaluateGuess === false
    // a way to store incorrect guesses in the array
    // this.incorrectGuesses.push(this.currentCard.id)
    this.returnCurrentCard();
    // return turn.giveFeedback();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
}

module.exports = Round;
