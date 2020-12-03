const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    // create Cards
    const cards = prototypeQuestions.map(data => {
      return card = new Card(data.id, data.question, data.answers, data.correctAnswer)
    });
    // put Cards in a Deck
    let deck = new Deck(cards);
    // create a Round using the Deck
    this.currentRound = new Round(deck);
    this.printMessage();
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
