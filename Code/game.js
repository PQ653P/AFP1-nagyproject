class Card {
    constructor(suits, value) {
        this.suits = suits;
        this.value = value;
        this.revealed = false;
    }
}

Card.SUITS = ['SPADES', 'HEARTS', 'DIAMONDS', 'CLUBS'];
Card.VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

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
        var currentIndex = this.cards.length;
        var temp, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temp = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }

    drawOne() {
        if (this.cards.length == 0) {
            throw 'Nincs több lap! :(';
        }
        return this.cards.pop();
    }
}

class BlackJackPlayer {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    get handValue() {
        var total = 0;
        for (var i = 0; i < this.cards.length; ++i) {
            var value = this.cards[i].value;
            if (value != 'A') {
                total += isNaN(value) ? 10 : value;
            }
            else {
                total += (total + 11 <= 21) ? 11 : 1;
            }
        }
        return total;
    }
}

class Game {
    constructor() {
        this.deck   = new Deck();
        this.player = new BlackJackPlayer();
        this.dealer = new BlackJackPlayer();
        this.deck.shuffle();
        this.isRunning = true;
    }

    endGame(win, message) {
        this.isRunning = false;
        if (win) {
            // TODO: zseton növelése
        }
        else {
            // TODO: zseton csökkentése
        }
        // TODO: rendes megjelenítés
        console.log(message);
    }

    dealersTurn() {
        if (!this.isRunning) {
            return;
        }
        // TODO: az osztó köre
    }

    hit() {
        if (!this.isRunning) {
            return;
        }

        this.player.addCard(deck.draw_one());
        if (this.player.handValue() > 21) {
            this.endGame(false, 'Túllépted a 21-et! Vesztettél!');
        }
    }

    stand() {
        if (!this.isRunning) {
            return;
        }

    }
}

window.onload = function () {
    game = new Game();

}