const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'ball', 'stuffed squirrel'], 'ball');
    card2 = new Card(2, `What kind of animal is Forrest?`, ['cat', 'dog', 'turtle'], 'dog');
    card3 = new Card(3, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be instantiated with an array of Card objects', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the Deck', () => {
    deck.countCards();
    expect(deck.cards).to.have.lengthOf(3);
  });
});
