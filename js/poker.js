// Creates a new deck (Blackjack deck specifically) and shuffles it
let cardDeck = new BLJDeck();
cardDeck.createDeck();
cardDeck.shuffleDeck();

// HTML element that displays the num of cards left in the deck
let deck_count = document.getElementById("deck_count");

// Grabs each card HTML element and puts it in an array, also does the same for the HTML elements that display whether or not a card is held
let cardList = [];
let holdCardList = [];
for (let i = 0; i < 5; i++) {
    cardList[i] = document.getElementById(`card${i + 1}`);
    holdCardList[i] = document.getElementById(`holdCard${i + 1}`);
}

let turn = 1;

function checkForHolds() {
    let isHeld;
    let heldCards = [ false, false, false, false, false ];

    for (let i = 0; i < holdCardList.length; i++) {
        isHeld = holdCardList[i];
        
        if (!isHeld.innerHTML) {
            heldCards[i] = false;
        } else {
            heldCards[i] = true;
        }
    }

    return heldCards;
};

// Deals a card from the deck and replaces the current cards in your hand
function dealCards() {
    let card;
    let dealtCard;
    let heldCards = checkForHolds();
    let count = 0;


    heldCards.forEach(isHeld => {
        if (isHeld) {
            count++;
        }
    });

    // if (turn != 2) {
        if (count >= 2) {
            for (let i = 0; i < heldCards.length; i++) {
                const isHeld = heldCards[i];
                
                if (!isHeld) {
                    // Grabs card from list and gets card from deck
                    card = cardList[i];
                    dealtCard = getCard(cardDeck);
            
                    // Updates said card's src to new png file
                    card.src = "../Assets/Cards/" + dealtCard + ".png";
            
                    // Updates the deck count
                    deck_count.innerHTML = "Cards Left: " + cardDeck.cards.length;
                }
            }
    
            turn++;
            console.log(turn);
        }
    // } 
    // else {
    //     let cardValue;
    //     for (let i = 0; i < cardList.length; i++) {
    //         const card = cardList[i];
    //         cardValue = card.src;
    //         cardValue = cardValue.split("/");
    //         cardValue = cardValue[cardValue.length - 1];
    //         cardValue = cardValue.replace(".png", "");
    //         console.log(cardValue);
            
    //         // switch () {
    
    //         // }
    //     }

    //     turn = 1;
    //     console.log(turn);
    // }
};

function getCard(deck) {
    let card = "Joker";
    card = deck.deal(); // Grabs a card from the deck

    // Changes value of card depending on it's current value
    switch (card.value) { // aomgus MONG AMONGU
        case "Ten":
            card.value = card.getNumericValue();
            break;
        case "Jack":
            card.value = "J";
            break;
        case "Queen":
            card.value = "Q";
            break;
        case "King":
            card.value = "K";
            break;
        case "Ace":
            card.value = "A";
            break;
        default:
            card.value = card.getNumericValue();
    }

    // Returns string based on card's suit and value combined
    if (card != "Joker") {
        return "card" + card.suit + card.value;
    } else {
        return "cardJoker";
    }
};

// Code that will run once html (and other resources like css) is loaded
window.onload = (event) => {
    // Grabs the "DRAW" button and sets the onclick event
    let draw_button = document.getElementById("draw_button");
    draw_button.setAttribute("onclick", "dealCards()");

    // Shows how many cards are left in the deck once window loads
    deck_count.innerHTML = "Cards Left: " + cardDeck.cards.length;

    // For loop to add event listeners to each card
    for (let i = 0; i < cardList.length; i++) {
        let card = cardList[i];
        let heldCard = holdCardList[i];
        
        card.addEventListener("click", function(event) { // Adds event listener to hold a card when clicked
            if (!heldCard.innerHTML) {
                heldCard.innerHTML = "HOLD";
            } else {
                heldCard.innerHTML = "";
            }
        });
    };

    // Deals the first hand on window load
    let dealtCard;
    cardList.forEach(card => {
        dealtCard = getCard(cardDeck);
    
        // Updates said card's src to new png file
        card.src = "../Assets/Cards/" + dealtCard + ".png";
    
        // Updates the deck count
        deck_count.innerHTML = "Cards Left: " + cardDeck.cards.length;
    });
};

// Old code

// Grabs each card in your "hand" and puts it in an array
// let card1 = document.getElementById("card1");
// let card2 = document.getElementById("card2");
// let card3 = document.getElementById("card3");
// let card4 = document.getElementById("card4");
// let card5 = document.getElementById("card5");
// let cardList = [ card1, card2, card3, card4, card5 ];

// let holdCard1 = document.getElementById("holdCard1");
// let holdCard2 = document.getElementById("holdCard2");
// let holdCard3 = document.getElementById("holdCard3");
// let holdCard4 = document.getElementById("holdCard4");
// let holdCard5 = document.getElementById("holdCard5");
// let holdCardList = [ holdCard1, holdCard2, holdCard3, holdCard4, holdCard5 ];