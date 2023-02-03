function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => 
    button.addEventListener('click', getID));

function getID() {
    let playerSelection = this.id;
    playRound(playerSelection);
    } 

let result;

function playRound(playerSelection) {
    let computerSelection = getComputerchoice();
    if (playerSelection === "rock" && computerSelection === "paper") { 
        result = "Paper beats rock. You lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Rock beats scissors. You win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Paper beats rock. You win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Scissors beats paper. You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Rock beats scissors. You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "Scissors beats paper. You win!";
    } else if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } 
game(result);
document.getElementById('result').innerHTML = result
}

const resultBox = document.createElement('div');
resultBox.id = "result";
document.body.appendChild(resultBox);

let playerPoints = 0;
let pcPoints = 0;

function game(result) {
   // for (i = 0; i < 5; i++) {
        if (result.includes("You win!")) {
            playerPoints++;
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`);
            //console.log(currentScore);
          } else if (result.includes("You lose!")) {
            pcPoints++;
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`);
            //console.log(currentScore);
          } else if (result.includes("It's a tie!")) {
            playerPoints++;
            pcPoints++; 
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`)
            //console.log(currentScore);
          } else {
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`)
            //console.log(currentScore);
          }
          gameOver(playerPoints,pcPoints);
          document.getElementById('runningScore').innerHTML = currentScore;
}

//[playerPoints, pcPoints]


const runningScore = document.createElement('div');
runningScore.id = "runningScore";
document.body.appendChild(runningScore);

function gameOver(playerPoints,pcPoints) {
    if (playerPoints === 5 || pcPoints === 5) {
        winner(playerPoints,pcPoints);
    } 
}

function winner(playerPoints,pcPoints) {
    if (playerPoints > pcPoints) {
        finalWinner = "Congratulations, you win the game!"; 
    } else if (playerPoints < pcPoints) {
        finalWinner = "You lost the game! Better luck next time.";
    } else {
        finalWinner = "It's a tie! Nobody wins this game.";
    } 
    document.getElementById('winner').innerHTML = finalWinner;
}

const winnerDiv = document.createElement('div');
winnerDiv.id = "winner";
document.body.appendChild(winnerDiv);

//console.log(winner())








