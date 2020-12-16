const CARD_WIDTH = 100;

class Card {
    constructor(suit, value) {
        this.suit     = suit;
        this.value    = value;
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
        for (let i = 0; i < Card.SUITS.length; i++) {
            for (let j = 0; j < Card.VALUES.length; j++) {
                let card = new Card(Card.SUITS[i], Card.VALUES[j]);
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        // algoritmus forrása:
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentIndex = this.cards.length;
        let temp, randomIndex;

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

    display(displayTag) {
        displayTag.innerHTML = '';
        for (let i = 0; i < this.cards.length; ++i) {
            let el = document.createElement('img');
            el.setAttribute('src', 'hátlap.png');
            el.setAttribute('width', `${CARD_WIDTH}px`);
            if (i == 0) {
                el.style.position = 'relative';
            }
            else {
                el.style.position = 'absolute';
            }
            el.style.top =  -i / 3;
            el.style.left = -i / 3;
            displayTag.appendChild(el);
        }
    }
}

class BlackJackPlayer {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    discard() {
        this.cards = [];
    }

    handValue() {
        let total = 0;
        for (let i = 0; i < this.cards.length; ++i) {
            let value = this.cards[i].value;
            if (value != 'A') {
                total += isNaN(value) ? 10 : parseInt(value);
            }
            else {
                total += (total + 11 <= 21) ? 11 : 1;
            }
        }
        return total;
    }

    displayHand(displayTag) {
        displayTag.innerHTML = '';
        for (let i = 0; i < this.cards.length; ++i) {
            let el = document.createElement('img');
            let card = this.cards[i];
            let fileName = `cards/${card.value}${card.suit[0]}.png`;

            el.setAttribute('src', fileName);
            el.setAttribute('width', `${CARD_WIDTH}px`);

            displayTag.appendChild(el);
        }
    }

    displayFirst(displayTag) {
        displayTag.innerHTML = '';
        if (this.cards.length > 0) {
            let el = document.createElement('img');
            let card = this.cards[0];
            let fileName = `cards/${card.value}${card.suit[0]}.png`;
            el.setAttribute('src', fileName);
            el.setAttribute('width', `${CARD_WIDTH}px`);

            displayTag.appendChild(el);

            for (let i = 1; i < this.cards.length; ++i) {
                let el = document.createElement('img');

                el.setAttribute('src', 'hátlap.png');
                el.setAttribute('width', `${CARD_WIDTH}px`);

                displayTag.appendChild(el);
            }
        }
    }
}

class Game {
    constructor(
        msgDisplay, moneyDisplay,
        deckDisplay, playerHandDisplay, dealerHandDisplay,
        hitButton, standButton, newGameButton, menuButton,
        betSelect) {
        // adattagok
        this.deck   = new Deck();
        this.player = new BlackJackPlayer();
        this.dealer = new BlackJackPlayer();
        this.balance = 1000;
        this.deck.shuffle();
        this.isRunning = false;
        this.isBalanceSyncronized = true;

        // HTML tagek
        this.msgDisplay        = msgDisplay;
        this.moneyDisplay      = moneyDisplay;
        this.deckDisplay       = deckDisplay;
        this.playerHandDisplay = playerHandDisplay;
        this.dealerHandDisplay = dealerHandDisplay;
        this.hitButton         = hitButton;
        this.standButton       = standButton;
        this.newGameButton     = newGameButton;
        this.menuButton        = menuButton;
        this.betSelect         = betSelect;

        // eventek
        this.hitButton.onclick     = (() => this.hit());
        this.standButton.onclick   = (() => this.stand());
        this.newGameButton.onclick = (() => this.newGame());
        this.menuButton.onclick    = (() => this.menu());

        // display
        this.deckDisplay.style.position = 'relative';

        this.getStartingBalance();
        this.showMessage('Új játék indításához kattints az "Új kör" gombra.');
    }

    showMessage(message) {
        this.msgDisplay.innerHTML = message;
    }

    display() {
        if (!this.isRunning) {
            this.hitButton.disabled   = true;
            this.standButton.disabled = true;

            this.dealer.displayHand(this.dealerHandDisplay);
        }
        else {
            this.showMessage(`Lapjaid értéke: ${this.player.handValue()}`);
            this.hitButton.disabled   = false;
            this.standButton.disabled = false;

            this.dealer.displayFirst(this.dealerHandDisplay);
        }
        this.moneyDisplay.innerHTML = `Zseton: $${this.balance}`;
        this.deck.display(this.deckDisplay);
        this.player.displayHand(this.playerHandDisplay);
    }

    newGame() {
        this.isRunning = true;
        this.player.discard();
        this.dealer.discard();

        this.player.cards.push(this.deck.drawOne());
        this.dealer.cards.push(this.deck.drawOne());
        this.player.cards.push(this.deck.drawOne());
        this.dealer.cards.push(this.deck.drawOne());

        if (this.player.handValue() == 21) {
            this.endGame(true, 'BLACKJACK!');
        }
        else if (this.dealer.handValue() == 21) {
            this.endGame(false, 'Vesztettél! Az osztónak blackjackje van!');
        }

        this.display();
    }

    endGame(win, message) {
        this.showMessage(message);
        this.isRunning = false;
        if (win) {
            this.balance += parseInt(this.betSelect.value);
        }
        else {
            this.balance -= parseInt(this.betSelect.value);
        }
        if (this.deck.length < 10) {
            this.showMessage('Keverés...');
            this.deck.fillDeck();
        }
        this.isBalanceSyncronized = false;
        this.updateBalance();
        this.display();
    }

    dealersTurn() {
        if (!this.isRunning) {
            return;
        }
        if (this.dealer.handValue() < 17) {
            this.dealer.cards.push(this.deck.drawOne());
        }
    }

    hit() {
        if (!this.isRunning) {
            return;
        }
        this.player.addCard(this.deck.drawOne());

        let value = this.player.handValue();
        if (value > 21) {
            this.endGame(false, `Túllépted a 21-et! Vesztettél!<br/> Lapjaid értéke: ${value}`);
        }

        this.display();
    }

    stand() {
        if (!this.isRunning) {
            return;
        }

        this.dealersTurn();

        let pValue = this.player.handValue();
        let dValue = this.dealer.handValue();
        if (dValue > 21) {
            this.endGame(true, `Nyertél! Az osztó túllépte a 21-et!`);
        }
        else if (pValue > dValue) {
            this.endGame(true, `Nyertél! Lapjaid értéke: ${pValue}.<br/> Az osztóé: ${dValue}`);
        }
        else {
            this.endGame(false, `Vesztettél! Lapjaid értéke: ${pValue}.  Az osztóé: ${dValue}`);
        }
        this.display();
    }

    menu() {
        this.updateBalance();
        window.location.replace('menu.php');
    }

    getStartingBalance() {
        let _data = {
            username: username,
            password: password
        };

        fetch('user/server.php', {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(json => {
            this.balance = json.balance;
            this.isBalanceSyncronized = true;
            this.display();
        })
        .catch(err => console.log(err));
    }

    updateBalance() {
        let _data = {
            username: username,
            password: password,
            balance: this.balance
        }

        fetch('user/server.php', {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(json => {
            if (json.status == 'ok') {
                this.isBalanceSyncronized = true;
            }
            else {
                console.log('REST API hiba');
            }
        })
        .catch(err => console.log(err));
    }
}

window.onload = function () {
    // display
    let deckDisplay       = document.getElementById('deck');
    let playerHandDisplay = document.getElementById('playerHand');
    let dealerHandDisplay = document.getElementById('dealerHand');
    let msgDisplay        = document.getElementById('message')
    let moneyDisplay      = document.getElementById('money');

    // gombok
    let hitButton     = document.getElementById('hit');
    let standButton   = document.getElementById('stand');
    let newGameButton = document.getElementById('newGame');
    let menuButton    = document.getElementById('menubutton');

    let betSelect     = document.getElementById('bet');

    let game = new Game(
        msgDisplay,
        moneyDisplay,
        deckDisplay,
        playerHandDisplay,
        dealerHandDisplay,
        hitButton,
        standButton,
        newGameButton,
        menuButton,
        betSelect
    );
    game.showMessage('Új játék indításához kattints az "Új kör" gombra.');
    game.display();
}
