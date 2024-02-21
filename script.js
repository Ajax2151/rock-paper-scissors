const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

// Get player choice - rock, paper, or scissors
// Get computer choice - rock, paper, or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}
// Evaluate winner based on hierarchy - paper beats rock, rock beats scissors, scissors beat paper
// Notify player of result