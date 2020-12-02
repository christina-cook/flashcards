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

  it.skip('should return a user\'s guess', function() {
    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('ball');
  });

  it.skip('should return the Card played', function() {
    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal({ id: 1, question: `What is Forrest\'s favorite toy?`, answers: ['benebone', 'tennis ball', 'stuffed squirrel'], correctAnswer: 'ball'});
  });

  it.skip('should evaluate whether or not the user\'s guess matches the correct answer on the card', function() {
    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess).to.equal(true);

    const card = new Card(2, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    const turn = new Turn('hiking', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess).to.equal(false);

  });

  it.skip('should give the user feedback based on their answer', function() {
    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    turn.giveFeedback();

    expect(turn.giveFeedback).to.equal('Correct!');

    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('benebone', card);

    turn.giveFeedback();

    expect(turn.giveFeedback).to.equal('Incorrect!');
  })
})
