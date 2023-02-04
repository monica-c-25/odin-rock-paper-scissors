function startGame() {
    let startDiv = document.getElementById("start");
    let gameBTNS = document.getElementById("btns");
    startDiv.style.display = "none";
    gameBTNS.style.display = "block";
}


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

function game() {
        if (result.includes("You win!")) {
            playerPoints++;
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`);
          } else if (result.includes("You lose!")) {
            pcPoints++;
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`);
          } else if (result.includes("It's a tie!")) {
            playerPoints++;
            pcPoints++; 
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`)
          } else {
            currentScore = (`computer: ${pcPoints} | player: ${playerPoints}`)
          }
          gameOver(playerPoints,pcPoints);
          document.getElementById('runningScore').innerHTML = currentScore;
}

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
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    gameRestart();
}

const winnerDiv = document.createElement('div');
winnerDiv.id = "winner";
document.body.appendChild(winnerDiv);

const buttonDiv = document.createElement('div');
buttonDiv.id = "buttonDiv";
document.body.appendChild(buttonDiv);

function gameRestart() {
    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again?"
    playAgain.id = "playAgain";
    buttonDiv.appendChild(playAgain);
    document.getElementById('playAgain').innerHTML = playAgain.textContent;
    playAgain.addEventListener('click', newGame)
}

function newGame() {
    location.reload();
    startGame();
}














