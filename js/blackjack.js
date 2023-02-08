deck = new BLJDeck();
let startingCash;
if (localStorage.getItem("cash") != null) {
    startingCash = parseInt(localStorage.getItem("cash"));
} else {
    startingCash = 1000;
    localStorage.setItem("cash", startingCash);
}
document.getElementById("cashDisplay").innerText = "Cash: " + startingCash;

bank = new Bank(startingCash);
var playing = false;


function startGame() {
    
    //stop player from betting more
    playing = true;

    //shuffle deck
    deck.createDeck();

    //deal cards
    this.playerHand = [];
    this.dealerHand = [];

    this.playerHand.push(deck.deal());
    hitPlayerHandler(getLastCardFormatted(this.playerHand));
    this.dealerHand.push(deck.deal());
    placeFaceDownCard();
    this.playerHand.push(deck.deal());
    hitPlayerHandler(getLastCardFormatted(this.playerHand));
    this.dealerHand.push(deck.deal());
    hitDealerHandler(getLastCardFormatted(this.dealerHand));
    document.getElementById("hitButton").innerText = "Hit";
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
        hitPlayerHandler(getLastCardFormatted(this.playerHand))
        if(this.playerHandValue() > 21) stand();
    } else {
        dealerHand.innerHTML = "";
        dealerHandCardCount = 0;
        playerHand.innerHTML = "";
        playerHandCardCount = 0;
        isStood = false;
        startGame();
    }
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
    if (total > 21) {
        for (let card of this.playerHand) { 
            if (card.value == "Ace") {
                total -= 10;
            }
        }
    }
    return total;
}

function dealerHandValue() {
    let total = 0;
    for (let card of this.dealerHand) {
        total += card.getNumericValue();
    }
    if (total > 21) {
        for (let card of this.dealerHand) {
            if (card.value == "Ace") {
                total -= 10;
            }
        }
    }
    return total;
}

function endGame() {
    let playerTotal = this.playerHandValue();
    let dealerTotal = this.dealerHandValue();
    if (playerTotal == 21 && this.playerHand.length == 2) {
        //player blackjack
        this.bank.betWinMultiplier(4);
    } else if (playerTotal > 21) {
        //player bust
        this.bank.betLose();
    } else if (dealerTotal > 21) {
        //dealer bust
        this.bank.betWinMultiplier(2);
    } else if (playerTotal > dealerTotal) {
        //player win
        this.bank.betWinMultiplier(2);
    } else if (dealerTotal > playerTotal) {
        //dealer win
        this.bank.betLose();
    } else {
        //tie, pays bet back
        this.bank.betDraw();
    }
    playing = false;
    document.getElementById("hitButton").innerText = "Play Again";
    betDisplay.innerHTML = "Bet: ";
    tokenCount = 0;
    cashDisplay.innerHTML = "Cash: " + this.bank.player.cash;
    localStorage.setItem("cash", this.bank.player.cash);
    if (this.bank.player.cash == 0) {
        alert("You have run out of cash! Please visit the bank to withdraw more.")
        location.href = "bank.html";
    }
}

