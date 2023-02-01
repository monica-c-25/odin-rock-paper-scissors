function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll('button');

function getID() {
    let playerSelection = this.id;
    playRound(playerSelection);
}

buttons.forEach(button => 
    button.addEventListener('click', getID));


function playRound(playerSelection) {
    let computerSelection = getComputerchoice();
    if (playerSelection === "rock" && computerSelection === "paper") { 
        console.log("Paper beats rock. You lose!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats rock. You win!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Scissors beats paper. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock beats scissors. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       console.log("Scissors beats paper. You win!");
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } 
}
 
/* let playerPoints = 0;
let pcPoints = 0;

function game() {
   // for (i = 0; i < 5; i++) {
        const result = playRound();
        if (result.includes("You win!")) {
            playerPoints++;
            console.log(`computer: ${pcPoints} | player: ${playerPoints}`);
            console.log(result);
          } else if (result.includes("You lose!")) {
            pcPoints++;
            console.log(`computer: ${pcPoints} | player: ${playerPoints}`);
            console.log(result);
          } else if (result.includes("It's a tie!")) {
            playerPoints++;
            pcPoints++; 
            console.log(`computer: ${pcPoints} | player: ${playerPoints}`)
            console.log(result);
          } else {
            console.log(`computer: ${pcPoints} | player: ${playerPoints}`)
            console.log(result);
          }
       // }
    return [playerPoints, pcPoints]
}

function winner() {
    game();
    if (playerPoints > pcPoints) {
        return ("Congratulations, you win the game!") 
    } else if (playerPoints < pcPoints) {
        return ("You lost the game! Better luck next time.")
    } else {
        return ("It's a tie! Nobody wins this game.")
    } 
}

console.log(winner())

*/






