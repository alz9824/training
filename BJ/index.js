let cards = []
let sum = 0
let blackjack = false
let isAlive = false
let message = "" 
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let player = {
  name : "alaa",
  chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomNumber =  Math.floor(Math.random()*13)+1
  if(randomNumber > 10){
    return 10
  } else if(randomNumber==1){
    return 11
  }
  else{
    return randomNumber
  }
}
function startGame(){
  document.getElementById("new").disabled = false;
  isAlive = true
  let card1 = getRandomCard()
  let card2 = getRandomCard()
  cards = [ card1 , card2]
  sum = card1 + card2
  renderGame()
}
function renderGame(){
    sumEl.textContent = "sum:" + sum
    cardEl.textContent = "cards:" 
    for (let i = 0 ; i<cards.length ; i++){
      cardEl.textContent += cards[i] + " "
    }
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message ="you've got blackjack!"
        blackjack = true 

        

    }else {
        message = "you're out!"
        isAlive = false
        
        

    }
    messageEl.textContent = message 
}
function newCard(){
  if(isAlive == true && blackjack == false){
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
  }
  if(blackjack==true){
    blackjack = false 
    document.getElementById("new").disabled = true;
  }
}

