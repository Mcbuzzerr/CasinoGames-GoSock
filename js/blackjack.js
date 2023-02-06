deck = new BLJDeck();
bank = new Bank(1000);


function startGame() {
    //stop player from betting more

    //shuffle deck
    deck.createDeck();

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
    this.endGame();
}

function addBet(bet) {
    //check if player has enough cash
    if (this.bank.player.cash < bet) {
        return;
    }
    tokenDisplayHandler(bet)
    this.bank.addBet(bet);
    cashDisplay.innerHTML = "Cash: " + this.bank.player.cash;
}

function hit() {
    this.playerHand.push(deck.drawCard());
}

function stand() {
    while (this.dealerHandValue() < 17) {
        this.dealerHand.push(deck.drawCard());
    }
    endGame();
}

function playerHandValue() {
    let total = 0;
    for (let card of this.playerHand) {
        total += card.getNumericValue();
    }
    return total;
}

function dealerHandValue() {
    let total = 0;
    for (let card of this.dealerHand) {
        total += card.getNumericValue();
    }
    return total;
}

function endGame() {
    let playerTotal = this.playerHandValue();
    let dealerTotal = this.dealerHandValue();
    if (playerTotal == 21) {
        //player blackjack
        this.bank.betWinMultiplier(4);
    } else if (playerTotal > 21) {
        //player bust
    } else if (dealerTotal > 21) {
        //dealer bust
        this.bank.betWinMultiplier(2);
    } else if (playerTotal > dealerTotal) {
        //player win
        this.bank.betWinMultiplier(2);
    } else if (dealerTotal > playerTotal) {
        //dealer win
    } else {
        //tie, pays bet back
        this.bank.betDraw();
    }
}

