const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should be instantiated with an array of Card objects', function() {
    const card1 = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const card2 = new Card(2, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    const card3 = new Card(3, `Forrest lives in a/an...`, ['apartment', 'house', 'condo'], 'condo');

    const deck = new Deck([card1, card2, card3]);

    expect(deck).to.equal([card1, card2, card3]);
  });

  it.skip('should know how many cards are in the Deck', function() {
    const card1 = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    const card2 = new Card(2, `What kind of animal is Forrest?`, ['cat', 'dog', 'turtle'], 'dog');
    const card3 = new Card(3, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    const card4 = new Card(4, `Forrest lives in a/an...`, ['apartment', 'house', 'condo'], 'condo');

    const deck = new Deck([card1, card2, card3, card4]);

    deck.countCards();

    expect(deck).to.equal([card1, card2, card3, card4]);
    expect(deck).to.have.lengthOf(4);
  })
})
