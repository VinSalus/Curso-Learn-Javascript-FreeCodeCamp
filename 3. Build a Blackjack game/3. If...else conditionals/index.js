let firstCard = 6;
let secondCard = 16;
let sum = firstCard + secondCard;

if(sum < 21){
    console.log("Do you want to draw another card? 😐")
} else if(sum === 21 ){
    console.log("Blackjack! You've won! 🥳")
} else{
    console.log("You're out of the game! 😭")
}