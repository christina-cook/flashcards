const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card1, card2, card3, turn;

  beforeEach(() => {
    card1 = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'ball', 'stuffed squirrel'], 'ball');
    card2 = new Card(2, `What kind of animal is Forrest?`, ['cat', 'dog', 'turtle'], 'dog');
    card3 = new Card(3, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    turn = new Turn();
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with a user\'s guess', () => {
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

  it('should indicate if the user\'s guess is correct', () => {
    const turn = new Turn('playing fetch', card3);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should indicate if the user\'s guess is incorrect', () => {
    const turn = new Turn('cat', card2);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
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
