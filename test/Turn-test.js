const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card1, card2, card3;

  beforeEach(() => {
    card1 = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'ball', 'stuffed squirrel'], 'ball');
    card2 = new Card(2, `What kind of animal is Forrest?`, ['cat', 'dog', 'turtle'], 'dog');
    card3 = new Card(3, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with a string representing the user\'s guess', () => {
    const turn = new Turn('ball');
    expect(turn.guess).to.equal('ball');
  });

  it('should be instantiated with a card object', () => {
    const turn = new Turn('ball', card1);
    expect(turn.guess).to.equal('ball');
    expect(card1.question).to.equal('What is Forrest\'s favorite toy?');
    expect(card1.answers).to.deep.equal(['benebone', 'ball', 'stuffed squirrel']);
    expect(card1.correctAnswer).to.equal('ball');
  });

  it('should return a user\'s guess', () => {
    const turn = new Turn('ball', card1);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('ball');
  });

  it('should return the Card object that was played', () => {
    const turn = new Turn('cat', card2);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card2);
  });

  it('should indicate whether or not the user\'s guess is correct', () => {
    const turn1 = new Turn('cat', card2);
    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    const turn2 = new Turn('playing fetch', card3);
    turn2.evaluateGuess();
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give the user feedback based on their answer', () => {
    const turn1 = new Turn('benebone', card1);
    turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('Incorrect!');
    const turn2 = new Turn('playing fetch', card3);
    turn2.giveFeedback();
    expect(turn2.giveFeedback()).to.equal('Correct!');
  });
});
