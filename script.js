// Get computer choice - rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock"
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Play a round
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        return "It's a tie!";
    } else if (player == "rock" && computer == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (player == "rock" && computer == "scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (player == "paper" && computer == "scissors") {
        return "You Lose! Scissors beat Paper.";
    } else if (player == "paper" && computer == "rock") {
        return "You Win! Paper beats Rock";
    } else if (player == "scissors" && computer == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (player == "scissors" && computer == "paper") {
        return "You Win! Scissors beat Paper";
    } else {
        return "That isn't a valid answer. Please enter Rock, Paper, or Scissors to play.";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

