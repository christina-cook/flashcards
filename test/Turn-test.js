const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with a string representing the user\'s guess', function() {
    const turn = new Turn('ball');

    expect(turn.guess).to.equal('ball');
  });

  it('should be instantiated with a card object', function() {
    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    expect(turn.guess).to.equal('ball');
    expect(card.question).to.equal(`What is Forrest\'s favorite toy?`);
    expect(card.answers).to.deep.equal(['benebone', 'tennis ball', 'stuffed squirrel']);
    expect(card.correctAnswer).to.equal('ball');
  });

  it('should return a user\'s guess', function() {
    const card = new Card(2, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('ball');
  });

  it('should return the Card object that was played', function() {
    const card = new Card(2, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should indicate whether or not the user\'s guess is correct', function() {
    const card = new Card(3, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    const turn1 = new Turn('hiking', card);

    turn1.evaluateGuess();

    expect(turn1.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('playing fetch', card);

    turn2.evaluateGuess();

    expect(turn2.evaluateGuess()).to.equal(true);

  });

  it.skip('should give the user feedback based on their answer', function() {
    const card = new Card(4, `Forrest lives in a/an...`, ['apartment', 'house', 'condo'], 'condo');
    const turn1 = new Turn('house', card);

    turn1.giveFeedback();

    expect(turn1.giveFeedback).to.equal('Incorrect!');

    const turn2 = new Turn('condo', card);

    turn2.giveFeedback();

    expect(turn2.giveFeedback).to.equal('Correct!');
  })
})
