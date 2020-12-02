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
        this.fillDeck();
    }

    fillDeck() {
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
            this.fillDeck();
            this.shuffle();
        }
        return this.cards.pop();
    }
}

class BlackJackPlayer {
    constructor() {
        this.cards = [];
        this.money = 100;
    }

    addCard(card) {
        this.cards.push(card);
    }

    discard() {
        this.cards = [];
    }

    handValue() {
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
    constructor(displayElement, hitButton, standButton, newGameButton) {
        // adattagok
        this.deck   = new Deck();
        this.player = new BlackJackPlayer();
        this.dealer = new BlackJackPlayer();
        this.deck.shuffle();
        this.isRunning = true;

        // HTML tagek
        this.displayElement = displayElement;
        this.hitButton      = hitButton;
        this.standButton    = standButton;
        this.newGameButton  = newGameButton;

        // eventek
        this.hitButton.onclick     = (() => this.hit());
        this.standButton.onclick   = (() => this.stand());
        this.newGameButton.onclick = (() => this.newGame());

        // display
        this.displayElement.style.position = 'relative';
    }

    display() {
        if (!this.isRunning) {
            this.hitButton.disabled   = true;
            this.standButton.disabled = true;
        }
        else {
            this.hitButton.disabled   = false;
            this.standButton.disabled = false;

            this.displayElement.innerHTML = '';

            for (var i = 0; i < this.deck.cards.length; ++i) {
                var el = document.createElement('img');

                el.setAttribute('src', 'hátlap.png');
                if (i == 0) {
                    el.style.position = 'relative';
                }
                else {
                    el.style.position = 'absolute';
                }
                el.style.top  = -i / 3 ;
                el.style.left = -i / 3;
                this.displayElement.appendChild(el);
            }
        }
    }

    newGame() {
        this.isRunning = true;
        this.player.discard();
        this.dealer.discard();
        this.display();
    }

    endGame(win, message) {
        this.isRunning = false;
        if (win) {
            this.player.money += 10;
        }
        else {
            this.player.money -= 10;
        }
        this.display();
    }

    dealersTurn() {
        if (!this.isRunning) {
            return;
        }

    }

    hit() {
        if (!this.isRunning) {
            return;
        }

        this.player.addCard(this.deck.drawOne());
        if (this.player.handValue() > 21) {
            this.endGame(false, 'Túllépted a 21-et! Vesztettél!');
        }
        this.display();
    }

    stand() {
        if (!this.isRunning) {
            return;
        }

        this.dealersTurn();

        var pValue = this.player.handValue();
        var dValue = this.dealer.handValue();
        if (pValue == 21 && this.player.cards.length == 2) {
            this.endGame(true, 'BLACKJACK!');
        }
        else if (pValue > dValue) {
            this.endGame(true, 'Nyertél! Lapjaid értéke: ${pValue}.');
        }
        else {
            this.endGame(false, 'Vesztettél! Lapjaid értéke: ${pValue}.');
        }
        this.display();
    }
}

window.onload = function () {
    var deckDisplay = document.getElementById('deck');

    // gombok
    var hitButton     = document.getElementById('hit');
    var standButton   = document.getElementById('stand');
    var newGameButton = document.getElementById('newGame');

    var game = new Game(deckDisplay, hitButton, standButton, newGameButton);
    game.newGame();
}
