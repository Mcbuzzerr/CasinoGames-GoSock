const playerHand = document.getElementById("playerHand")
let playerHandCardCount = 1; // 1 because the first card is already there, Possibly change this to 0 once code works
const dealerHand = document.getElementById("dealerHand")
let dealerHandCardCount = 1; // 1 because the first card is already there, Possibly change this to 0 once code works

let isStood = false;

const hitButtonHandler = () => {
    if (playerHandCardCount < 11 && !isStood) {
        let newCard = document.createElement("img")
        newCard.src = "../Assets/Cards/cardClubs2.png"
        newCard.classList.add("faceUp")
        newCard.style.transform = `rotate(${Math.max(20 - (playerHandCardCount * 3), 0)}deg)`
        newCard.style.right = `-${20 * (playerHandCardCount * 1.3)}px`
        playerHand.appendChild(newCard)
        playerHandCardCount++

        let newDealerCard = document.createElement("img")
        newDealerCard.src = "../Assets/Cards/cardClubs6.png"
        newDealerCard.classList.add("faceUp")
        newDealerCard.style.transform = `rotate(${Math.max(20 - (dealerHandCardCount * 3), 0)}deg)`
        newDealerCard.style.right = `-${20 * (dealerHandCardCount * 1.3)}px`
        dealerHand.appendChild(newDealerCard)
        dealerHandCardCount++
    } else {
        // New game?
    }
}

const betDisplay = document.getElementById("betDisplay")
let tokenCount = 0;
const tokenDisplayHandler = (bet) => {
    let newChip = document.createElement("img")
    newChip.src = `../Assets/Overall UI/Chip${bet}.png`
    newChip.classList.add("chip")
    newChip.style.position = "absolute"
    newChip.style.right = `-${tokenCount * 20}px`
    betDisplay.appendChild(newChip)
    tokenCount++
}

const handleBack = () => {
    window.location.href = "../html/home.html"
}

const playerFaceDownCard = document.getElementById("playerFaceDownCard")
const dealerFaceDownCard = document.getElementById("dealerFaceDownCard")
const faceUpCards = document.getElementsByClassName("faceUp")
const standButtonHandler = () => {
    playerFaceDownCard.style.setProperty("--pathToFaceUpCard", "url(../Assets/Cards/cardClubs2.png)")
    playerFaceDownCard.style.animation = "revealCard 1s forwards";
    dealerFaceDownCard.style.setProperty("--pathToFaceUpCard", "url(../Assets/Cards/cardClubs5.png)")
    dealerFaceDownCard.style.animation = "revealCard 1s forwards 0.75s";
    for (let index = 0; index < faceUpCards.length; index++) {
        faceUpCards[index].style.transition = `${0.3 + ((faceUpCards.length - index)/10)}s`;
        faceUpCards[index].style.transform = "rotate(0deg)";
    }
    isStood = true;
}