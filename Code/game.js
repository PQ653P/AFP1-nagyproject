const CARD_SUITS = ['SPADES', 'HEARTS', 'DIAMONDS', 'CLUBS'];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'JACK', 'QUEEN', 'KING', 'ACE'];

function card(suit, value) {
    return {suit: suit, value: value};
}

function create_deck() {
    deck = [];
    for (var i = 0; i < CARD_SUITS.length; i++) {
        for (var j = 0; j < CARD_VALUES.length; j++) {
            deck.push(card(CARD_SUITS[i], CARD_VALUES[j]));
        }
    }
    return deck;
}

// algoritmus forrása:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle_deck(deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }
}

function draw_from_deck(deck) {
    var card = deck.pop()

    return card;
}

window.onload = function() {
    deck = create_deck();
    shuffle_deck(deck);


}