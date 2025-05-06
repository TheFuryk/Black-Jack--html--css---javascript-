

let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
// 1. Create a function, getRandomCard(), that always returns the number 5"

function getRandomCard() {
      // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber=== 1){
        return 11
    }
    else if ( randomNumber > 10){
        return 10 
    }
    else{
        return randomNumber
    }
}

function startGame() {
    sum =0
    cards = []
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
   

    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "  // Reset and label once
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
        // 2. Display the message in the messageEl using messageEl.textContent
        messageEl.textContent = message
        // 3. Call the startGame() function to start the game
        
        
}


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
   // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive=== true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }

    } 
