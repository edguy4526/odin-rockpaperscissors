console.log("Type 'rock', 'paper', or 'scissors' into the prompt to select your choice!")
function getComputerChoice () {
    let rps = [
        "rock",
        "paper",
        "scissors"
    ]
    let computerChoice = rps[Math.floor(Math.random() * rps.length)]
    return computerChoice;
}

function rockPaperScissors (playerSelection, computerSelection) {
    if (computerSelection == /playerSelection/i) {
        return ("It was a tie!");
    } else if ((playerSelection == /rock/i && computerSelection == /paper/i) ||
    (playerSelection == /paper/i && computerSelection == /scissors/i) ||
    (playerSelection == /scissors/i && computerSelection == /rock/i)) {
        return ("You lose!");
    } else if ((playerSelection == /paper/i && computerSelection == /rock/i) ||
    (playerSelection == /scissors/i && computerSelection == /paper/i) ||
    (playerSelection == /rock/i && computerSelection == /scissors/i)) {
        return ("You win!");
    } else {
        return "Something is broken";
    }
}

let playerSelection = prompt();
let computerSelection = getComputerChoice();

console.log(rockPaperScissors(playerSelection, computerSelection));