const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1, card2, card3

  beforeEach(function() {
    card1 = new Card(1, `What is Forrest\'s favorite toy?`, ['benebone', 'tennis ball', 'stuffed squirrel'], 'ball');
    card2 = new Card(2, `What kind of animal is Forrest?`, ['cat', 'dog', 'turtle'], 'dog');
    card3 = new Card(3, `What is Forrest\'s favorite activity?`, ['hiking', 'playing fetch', 'swimming'], 'playing fetch');
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
  });

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should include a deck with an array of cards', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('should indicate the number of turns, starting at 0', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should indicate the number of incorrect quesses, starting at 0', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.equal(0);
  });

  it('should return the first card in the deck as the current card being played', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.deck.cards[0]).to.deep.equal({id: 1, question: "What is Forrest's favorite toy?", answers: [ 'benebone', 'tennis ball', 'stuffed squirrel' ], correctAnswer: 'ball'});
    // expect(round.deck.cards[0]).to.deep.equal(card1);
  });


  it('should instantiate a new Turn when a guess is made', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  }),


  it('should increment the turns count each time a turn is made', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn();

    round.takeTurn();

    expect(round.turns).to.equal(1);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(4);
  });

  //the turns count increments regardless of whether the answer was correct
  //the next card then becomes the current card
  //guesses are evaluated
  //incorrect guesses are stored (via the id) in an array
  //of incorrectGuesses
  //feedback is returned

  // once a card is played it needs to move to the end of the array

  //it should include a method to calculate and return percentage
  //of correct guesses

  //it should include a method to print a message when the game is over

})
