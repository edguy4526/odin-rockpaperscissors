console.log("Type 'rock', 'paper', or 'scissors' into the prompt to select your choice!");
function getComputerChoice () {
    let computerChoice = Math.floor((Math.random() * (3)) + 1);
    return computerChoice
}
function rockPaperScissors (playerSelection, computerSelection) {
    // 1 = rock, 2 = paper, 3 = scissors
    if ((computerSelection === 1 && playerSelection === /rock/i) ||
    (computerSelection === 2 && playerSelection === /paper/i) ||
    (computerSelection === 3 && playerSelection === /scissors/i)) {
        return ("It was a tie!");
    } else if ((playerSelection === /rock/i && computerSelection == 2 ||
    (playerSelection === /paper/i && computerSelection === 3) ||
    (playerSelection === /scissors/i && computerSelection === 1))) {
        return ("You lose!");
    } else if ((playerSelection === /paper/i && computerSelection === 1) ||
    (playerSelection === /scissors/i && computerSelection === 2) ||
    (playerSelection === /rock/i && computerSelection === 3)) {
        return ("You win!");
    } else {
        return ("Something is broken");
    }
}

let playerSelection = ("paper");
let computerSelection = (1);

console.log(rockPaperScissors());