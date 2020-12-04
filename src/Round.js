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

  calculatePercentCorrect() {
    const totalIncorrect = this.incorrectGuesses.length;
    const percentIncorrect = totalIncorrect / this.turns;
    const percentCorrect = 100 - (percentIncorrect * 100);
    return Math.round(percentCorrect);
  }

  endRound() {
    const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(message);
    return message;
  }
}

module.exports = Round;
