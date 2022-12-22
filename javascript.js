function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection= getComputerchoice();
    if (playerSelection === "rock" && computerSelection === "paper") { 
        return "Paper beats rock. You lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors. You win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock. You win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats paper. You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats scissors. You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper. You win!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "Input a valid value!";
    }
}
 
let playerPoints = 0;
let pcPoints = 0;

function game() {
    for (i = 0; i < 5; i++) {
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
        }
    return [playerPoints, pcPoints]
}

function winner() {
    game();
    if (playerPoints > pcPoints) {
        console.log("Congratulations, you win the game!") 
    } else if (playerPoints < pcPoints) {
        console.log("You lost the game! Better luck next time.")
    } else {
        console.log("It's a tie! Nobody wins this game.")
    } 
}

console.log(winner())









/* pseudocode
- write a function getComputerchoice() to return either 'Rock', 'Paper', or 'Scissors'
    - use console to make sure output is returning as expected
- write a function playRound() that takes playerSelection and computerSelection as parameters for single round
    - return a string that declares win or loss
    - make sure playerSelection is case-insensitive and can input rock, ROCK, rOck, etc.
- write a function game() which calls playRound inside and loops for 5 rounds
- use prompt() to get input from user
*/
