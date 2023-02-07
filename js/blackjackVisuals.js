const playerHand = document.getElementById("playerHand")
let playerHandCardCount = 0; // 1 because the first card is already there, Possibly change this to 0 once code works
const dealerHand = document.getElementById("dealerHand")
let dealerHandCardCount = 0; // 1 because the first card is already there, Possibly change this to 0 once code works

let isStood = false;

const hitPlayerHandler = (cardName) => {
    if (playerHandCardCount < 11 && !isStood) {
        let newCard = document.createElement("img")
        newCard.src = `../Assets/Cards/${cardName}.png`
        newCard.classList.add("faceUp")
        if (playerHandCardCount == 0) {
            newCard.style.transform = `rotate(0deg)`
        } else {
            newCard.style.transform = `rotate(${Math.max(20 - (playerHandCardCount * 3), 0)}deg)`
        }
        newCard.style.right = `-${20 * (playerHandCardCount * 1.3)}px`
        playerHand.appendChild(newCard)
        playerHandCardCount++
    }
}

const hitDealerHandler = (cardName) => {
    let newDealerCard = document.createElement("img")
    newDealerCard.src = `../Assets/Cards/${cardName}.png`
    newDealerCard.classList.add("faceUp")
    newDealerCard.style.transform = `rotate(${Math.max(20 - (dealerHandCardCount * 3), 0)}deg)`
    newDealerCard.style.right = `-${20 * (dealerHandCardCount * 1.3)}px`
    dealerHand.appendChild(newDealerCard)
    dealerHandCardCount++
}

const placeFaceDownCard = () => {
    let newCard = document.createElement("img")
    newCard.src = `../Assets/Cards/cardBack_blue1.png`
    newCard.classList.add("faceDown")
    newCard.id = "dealerFaceDownCard"
    dealerHand.appendChild(newCard)
    dealerHandCardCount++
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

const revealDealerHand = (dealerFaceDownCardName) => {
    const faceUpCards = document.getElementsByClassName("faceUp")
    const dealerFaceDownCard = document.getElementById("dealerFaceDownCard")
    console.log(dealerFaceDownCard)
    dealerFaceDownCard.style.setProperty("--pathToFaceUpCard", `url(../Assets/Cards/${dealerFaceDownCardName}.png)`)
    dealerFaceDownCard.style.animation = "revealCard 1s forwards 0.75s";
    for (let index = 0; index < faceUpCards.length; index++) {
        faceUpCards[index].style.transition = `${0.3 + ((faceUpCards.length - index)/10)}s`;
        faceUpCards[index].style.transform = "rotate(0deg)";
    }
    isStood = true;
}

let inputList = []
document.addEventListener("keyup", (event) => {
    let cheatString = "jackblack"
    inputList.push(event.key)
    if (inputList.length > cheatString.length) {
        inputList.shift()
    }
    if (inputList.join("") == cheatString) {
        document.getElementById("blackJackTitle").innerHTML = "Jack Black"
        let img = document.createElement("div")
        img.classList.add("jackBlack")
        img.style.animation = "rocker 0.5s forwards infinite"
        document.getElementById("blackJackTitle").appendChild(img)
    }
    console.log(inputList.join(""))
})

const huell = () => {
    alert("HOW TO PLAY BLACKJACK\n\nThe goal of Blackjack is to beat the dealer's hand without going over 21.\n\nFace cards are worth 10. Aces are worth 1 or 11, whichever makes a better hand.\n\nEach player starts with two cards, one of the dealer's cards is hidden until the end.\n\nTo 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.\n\nIf you go over 21 you bust, and the dealer wins regardless of the dealer's hand.\n\nIf you are dealt 21 from the start (Ace & 10), you got a blackjack.\n\nDealer will hit until his/her cards total 17 or higher.")
}