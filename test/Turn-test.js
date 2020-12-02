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
  })

  it('should be instantiated with a card object', function() {
    const card = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const turn = new Turn('ball', card);

    expect(turn.guess).to.equal('ball');
    expect(card.question).to.equal(`What is Forrest\'s favorite toy?`);
    expect(card.answers).to.deep.equal(['benebone', 'tennis ball', 'stuffed squirrel']);
    expect(card.correctAnswer).to.equal('ball');
  })
})
