let cards = []
let sum = 0
let flag = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
// let playerEl = document.querySelector("#player-el")

// let player = {
//   name: "Arthita",
//   chips: 145,
//   say: function () {
//     console.log("Hello")
//   }
// }

// player.say()

// playerEl.textContent = player.name + ": $" + player.chips

function renderGame() {
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    flag = true
    message = "You got Blackjack!!"
  } else {
    isAlive = false
    message = "You are out of the game!"
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && flag == false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function getRandomCard() {
  return Math.floor(Math.random() * (12 - 2) + 2)
}
