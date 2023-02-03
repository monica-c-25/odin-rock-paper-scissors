function startGame() {
    let startDiv = document.getElementById("start");
    let gameBTNS = document.getElementById("btns");
    let gameOver = document.getElementById("gameOver");
    startDiv.style.display = "none";
    gameBTNS.style.display = "block";
    gameOver.style.display = "none"; 
}

/* function createBTNS() {
const btns = document.getElementById('btns');

const rock= document.createElement("button");
rock.setAttribute("id", "rock");
rock.innerHTML="rock";
btns.appendChild(rock);


const paper= document.createElement("button");
paper.setAttribute("id", "paper");
paper.innerHTML="paper";
btns.appendChild(paper);

const scissors= document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.innerHTML="scissors";
btns.appendChild(scissors);
}

*/
//function start() {buttons.forEach(button => 
    //button.addEventListener('click', getID));
//}

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
    gameRestart();
}

const winnerDiv = document.createElement('div');
winnerDiv.id = "winner";
document.body.appendChild(winnerDiv);

function gameRestart() {
    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again?"
    playAgain.id = "playAgain";
    document.body.appendChild(playAgain);
    document.getElementById('playAgain').innerHTML = playAgain.textContent;
    playAgain.addEventListener('click', newGame)
}

function newGame() {
    location.reload();
    startGame();
}


/*function resetGame(){
    playerPoints = 0;
    pcPoints = 0;
}

    let startDiv = document.getElementById("start");
    let gameBTNS = document.getElementById("btns");
    let gameOver = document.getElementById("gameOver");
    startDiv.style.display = "none";
    gameBTNS.style.display = "none"; 
    gameOver.style.display = "block"; 
    playerPoints = 0;
    pcPoints = 0;
*/














