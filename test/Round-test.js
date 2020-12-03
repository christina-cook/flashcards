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


  it('should update the number of turns each time a turn is taken', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('benebone');

    expect(round.turns).to.equal(1);

    round.takeTurn('dog');
    round.takeTurn('hiking');

    expect(round.turns).to.equal(3);
  });


  it('should return a new card at the end of each turn', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('cat');

    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn('hiking');

    expect(round.returnCurrentCard()).to.equal(card3);
  });



  //guesses are evaluated
  // it.skip('should evaluate whether or not a guess is correct', function() {
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //
  //   round.takeTurn(); //
  //
  //   expect().to.equal('Incorrect!');
  // });

  //incorrect guesses are stored (via the id) in an array
  //of incorrectGuesses
  // need to test the id being added to the array
  // it.skip('should store incorrect quesses in an array with the card id', function() {
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //
  //
  // });

  //feedback is returned


  // it.skip('should calculate and return the percentage of correct guesses', function() {
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //
  //   round.calculatePercentCorrect();
  //
  // });
  //
  //
  // it.skip('should print a message when the game is over', function() {
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //
  //   round.endRound();
  //
  // });

})
