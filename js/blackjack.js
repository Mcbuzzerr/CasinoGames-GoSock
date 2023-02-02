
class Blackjack {
    constructor() {
    playerHand = [];
    dealerHand = [];
    deck = new BLJDeck();
    deck.createDeck();
    deck.shuffleDeck();
    bank = new Bank(1000);
    }

    startGame() {
        //add bet
        this.bank.addBet(10, 0);

        //deal cards
        this.playerHand = [];
        this.dealerHand = [];
        this.playerHand.push(deck.drawCard());
        this.dealerHand.push(deck.drawCard());
        this.playerHand.push(deck.drawCard());
        this.dealerHand.push(deck.drawCard());

        //play blackjack
        while(this.playerHandValue() <= 21) {
            //show player hand
            //show dealer hand
            //ask player to hit or stand
        }
    }

    hit() {
        this.playerHand.push(deck.drawCard());
    }

    stand() {
        while (this.dealerHandValue() < 17) {
            this.dealerHand.push(deck.drawCard());
        }
        endGame();
    }

    playerHandValue() {
        let total = 0;
        for (let card of this.playerHand) {
            total += card.getNumericValue();
        }
        return total;
    }

    dealerHandValue() {
        let total = 0;
        for (let card of this.dealerHand) {
            total += card.getNumericValue();
        }
        return total;
    }

    endGame() {
        let playerTotal = this.playerHandValue();
        let dealerTotal = this.dealerHandValue();
        if (playerTotal == 21) {
            //player blackjack
            this.bank.betWinMultiplier(0, 2);
        } else if (playerTotal > 21) {
            //player bust
        } else if (dealerTotal > 21) {
            //dealer bust

        } else if (playerTotal > dealerTotal) {
            //player win

        } else if (dealerTotal > playerTotal) {
            //dealer win
        } else {
            //tie, pays bet back
            this.bank.
        }
    }

}