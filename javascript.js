

function getComputerchoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return "You lose!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win!";
    } else {
        return "It's a tie!";
    }
}










/* pseudocode
- write a function getComputerchoice() to return either 'Rock', 'Paper', or 'Scissors'
    - use console to make sure output is returning as expected
- write a function playRound() that takes playerSelection and computerSelection as parameters for single round
    - return a string that declares win or loss
    - make sure playerSelection is case-insensitive and can input rock, ROCK, rOck, etc.
- write a function game() which calls playRound inside and loops for 5 rounds
- use prompt() to get input from user
*/
