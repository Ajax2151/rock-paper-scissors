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

    // switch (player, computer) {
    //     case player == computer:
    //         return "It's a tie!";
    //     break;

    //     case player == "rock" && computer == "paper":
    //         return "You Lose! Paper beats Rock.";
    //     break;

    //     case player == "paper" && computer == "scissors":
    //         return "You Lose! Scissors beat Paper.";
    //     break;

    //     case player == "scissors" && computer == "rock":
    //         return "You Lose! Rock beats Scissors.";
    //     break;

    //     case player == "rock" && computer == "scissors":
    //         return "You Win! Rock beats Scissors.";
    //     break;

    //     case player == "paper" && computer == "rock":
    //         return "You Win! Paper beats Rock.";
    //     break;

    //     case player == "scissors" && computer == "paper":
    //         return "You Win! Scissors beat Paper."
    //     break;
    // }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

// Evaluate winner based on hierarchy - paper beats rock, rock beats scissors, scissors beat paper
// Notify player of result