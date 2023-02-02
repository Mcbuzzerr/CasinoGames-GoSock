const playerHand = document.getElementById("playerHand")
let playerHandCardCount = 1
const hitButtonHandler = () => {
    let newCard = document.createElement("img")
    newCard.src = "../Assets/Cards/cardClubs2.png"
    newCard.classList.add("faceUp")
    newCard.style.transform = `rotate(${Math.max(15 - (playerHandCardCount * 3), 0)}deg)`
    newCard.style.right = `-${20 * (playerHandCardCount * 2)}px`
    playerHand.appendChild(newCard)
    playerHandCardCount++
}