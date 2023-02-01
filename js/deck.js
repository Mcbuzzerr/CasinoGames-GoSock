
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    getNumericValue() {
        switch (this.value) {
            case 'Ace':
                return 1;
            case 'Two':
                return 2;
            case 'Three':
                return 3;
            case 'Four':
                return 4;
            case 'Five':
                return 5;
            case 'Six':
                return 6;
            case 'Seven':
                return 7;
            case 'Eight':
                return 8;
            case 'Nine':
                return 9;
            case 'Ten':
                return 10;
            case 'Jack':
                return 11;
            case 'Queen':
                return 12;
            case 'King':
                return 13;
        }
    }
}

class BLJCard extends Card {
    getNumericValue() {
        switch (this.value) {
            case 'Ace':
                return 11;
            case 'Two':
                return 2;
            case 'Three':
                return 3;
            case 'Four':
                return 4;
            case 'Five':
                return 5;
            case 'Six':
                return 6;
            case 'Seven':
                return 7;
            case 'Eight':
                return 8;
            case 'Nine':
                return 9;
            case 'Ten':
                return 10;
            case 'Jack':
                return 10;
            case 'Queen':
                return 10;
            case 'King':
                return 10;
        }
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffleDeck() {
        const { cards } = this;

        let m = cards.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [cards[m], cards[i]] = [cards[i], cards[m]];
        }

        return this;
    }

    deal() {
        return this.cards.pop();
    }

}

class BLJDeck extends Deck {
    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new BLJCard(suit, value));
            }
        }
    }
}

// deck = new Deck();
// deck.createDeck();
// deck.shuffleDeck();
// for (let i = 0; i < 52; i++) {
//     console.log(deck.deal());
// }