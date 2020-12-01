class Card {
    constructor(suits, value) {
        this.suits = suits;
        this.value = value;
    }
}

Card.SUITS = ['SPADES', 'HEARTS', 'DIAMONDS', 'CLUBS'];
Card.VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class Deck {
    constructor() {
        this.cards = [];
        for (var i = 0; i < Card.SUITS.length; i++) {
            for (var j = 0; j < Card.VALUES.length; j++) {
                var card = new Card(Card.SUITS[i], Card.VALUES[j]);
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        // algoritmus forrása:
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        var currentIndex = this.cards.length, temporaryValue, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }
}

window.onload = function() {
    deck = create_deck();
    shuffle_deck(deck);

    player_cards = [];
    dealer_cards = [];

    player_cards.push(draw_from_deck(deck));
    dealer_cards.push(draw_from_deck(deck));
    player_cards.push(draw_from_deck(deck));
    dealer_cards.push(draw_from_deck(deck));

}