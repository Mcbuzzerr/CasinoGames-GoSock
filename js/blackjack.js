deck = new BLJDeck();
bank = new Bank(1000);
var playing = false;


function startGame() {
    //stop player from betting more
    playing = true;

    //shuffle deck
    deck.createDeck();

    //deal cards
    this.playerHand = [];
    this.dealerHand = [];
    //Assets\Cards\cardDiamonds2.png
    this.playerHand.push(deck.deal());
    hitPlayerHandler(getLastCardFormatted(this.playerHand));
    this.dealerHand.push(deck.deal());
    placeFaceDownCard();
    this.playerHand.push(deck.deal());
    hitPlayerHandler(getLastCardFormatted(this.playerHand));
    this.dealerHand.push(deck.deal());
    hitDealerHandler(getLastCardFormatted(this.dealerHand));

    //play blackjack
    // while(this.playerHandValue() <= 21 && playing) {
    //     //ask player to hit or stand
    // }
    // this.endGame();
}

function getLastCardFormatted(hand) {
    cardValue = "Joker";
    switch (hand[hand.length - 1].value) {
        case "Ace":
            cardValue = "A";
            break;
        case "Jack":
            cardValue = "J";
            break;
        case "Queen":
            cardValue = "Q";
            break;
        case "King":
            cardValue = "K";
            break;
        default:
            cardValue = hand[hand.length - 1].getNumericValue();
    }
    if (cardValue != "Joker") {
    return "card" + hand[hand.length - 1].suit + cardValue;
    } else {
        return "cardJoker.png";
    }
}

function getFirstCardFormatted(hand) {
    cardValue = "Joker";
    switch (hand[0].value) { //dONT FORGET TO UPDATE ME
        case 1:
            cardValue = "Ace";
            break;
        case 11:
            cardValue = "Jack";
            break;
        case 12:
            cardValue = "Queen";
            break;
        case 13:
            cardValue = "King";
            break;
        default:
            cardValue = hand[0].getNumericValue();
    }
    if (cardValue != "Joker") {
    return "card" + hand[0].suit + cardValue;
    } else {
        return "cardJoker.png";
    }
}

function addBet(bet) {
    //check if player has enough cash and game is not in progress
    if (this.bank.player.cash < bet || playing) {
        return;
    }
    tokenDisplayHandler(bet)
    this.bank.addBet(bet);
    cashDisplay.innerHTML = "Cash: " + this.bank.player.cash;
}

function hit() {
    if (playing) {
    this.playerHand.push(deck.deal());
    hitPlayerHandler(getLastCardFormatted(this.playerHand));
    } else startGame();
}

function stand() {
    while (this.dealerHandValue() < 17) {
        this.dealerHand.push(deck.deal());
        hitDealerHandler(getLastCardFormatted(this.dealerHand));
    }
    revealDealerHand(getFirstCardFormatted(this.dealerHand));
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
    playing = false;
}

