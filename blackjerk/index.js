// let firstCard = getRandomcards()     //12 
// let secondCard = getRandomcards()        //5
let cards = []
// let sum = firstCard + secondCard 
let message = ""
let isAlive = false
let hasBlackJack = false

let messageEl = document.getElementById ("message-el")
let cardEl = document.getElementById ("card-el")
let sumEl = document.getElementById ("sum-el")

let player = {
    name: "Blakperl",
    chips: 124
}
// let playerName = "Blakperl"
// let playerChips = 148

let playerEl = document.getElementById ("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomcards() {
    let randomNumber = Math.floor( Math.random() * 13) + 1

    if (randomNumber > 10)  {
        return 10
    }
     else if (randomNumber === 1)  {    
            return 11
    
    }
    else {
    return  randomNumber
}
}

// console.log( getRandomcards() )

function startGame() {

    isAlive = true
    let firstCard = getRandomcards()
    let secondCard = getRandomcards()
    cards = [firstCard + secondCard]
    sum = firstCard  + secondCard
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: "
    // cardEl.textContent = "Card: " + firstCard + " " + secondCard

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "  + sum

    if (sum <= 20) {
        message = " oops! Do you want to draw a new card?"
    }

    else if (sum === 21) {
        message = "You got a Blackjack"
        hasBlackJack = true
    }

    else {
       message = "Sorry! You are out of the game"
       isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {

    if (isAlive === true && hasBlackJack === false){

    
    let card =  getRandomcards()       // 7
    sum += card

    cards.push (card)
    
    renderGame ()
   }  
}




