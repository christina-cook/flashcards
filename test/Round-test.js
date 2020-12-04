const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, `What is Forrest's favorite toy?`, ['benebone', 'ball', 'stuffed squirrel'], 'ball');
    card2 = new Card(2, `What kind of animal is Forrest?`, ['cat', 'dog', 'turtle'], 'dog');
    card3 = new Card(3, `What is Forrest's favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should update the number of turns each time a turn is taken', () => {
    round.takeTurn('benebone');
    expect(round.turns).to.equal(1);
    round.takeTurn('dog');
    round.takeTurn('hiking');
    expect(round.turns).to.equal(3);
  });

  it('should return a new card at the end of each turn', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('cat');
    expect(round.returnCurrentCard()).to.equal(card2);
    round.takeTurn('hiking');
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should indicate if a guess is correct', () => {
    expect(round.takeTurn('ball')).to.equal('Correct!');
  });

  it('should indicate if a guess is incorrect', () => {
    expect(round.takeTurn('benebone')).to.equal('Incorrect!');
  });

  it('should store incorrect quesses in an array with the card id', () => {
    round.takeTurn('ball');
    round.takeTurn('cat');
    round.takeTurn('swimming');
    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('ball');
    round.takeTurn('cat');
    round.takeTurn('swimming')
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should print a message when the game is over', () => {
    round.takeTurn('ball');
    round.takeTurn('cat');
    round.takeTurn('swimming')
    round.calculatePercentCorrect();
    round.endRound()
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });
});
