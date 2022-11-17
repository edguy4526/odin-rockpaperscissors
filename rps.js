console.log("Type 'rock', 'paper', or 'scissors' into the prompt to select your choice!");
function getComputerChoice () {
    let computerChoice = Math.floor((Math.random() * (3)) + 1);
    return computerChoice
}
function rockPaperScissors (playerSelection, computerSelection) {
    // 1 = rock, 2 = paper, 3 = scissors
    playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'!").toLowerCase();
    computerSelection = getComputerChoice();
    if ((computerSelection === 1 && playerSelection === "rock") ||
    (computerSelection === 2 && playerSelection === "paper") ||
    (computerSelection === 3 && playerSelection === "scissors")) {
        return ("It was a tie! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else if ((playerSelection === "rock" && computerSelection == 2 ||
    (playerSelection === "paper" && computerSelection === 3) ||
    (playerSelection === "scissors" && computerSelection === 1))) {
        computerWins++
        return ("You lose! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else if ((playerSelection === "paper" && computerSelection === 1) ||
    (playerSelection === "scissors" && computerSelection === 2) ||
    (playerSelection === "rock" && computerSelection === 3)) {
        playerWins++
        return ("You win! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else {
        console.log("The values were " + computerSelection + " and " + playerSelection);
        return ("Something is broken");
    }
}

function runRound () {
    for (let i = 0; i < 10; i++) {
        console.log(rockPaperScissors(playerSelection, computerSelection))
        if (playerWins > computerWins) {
            console.log("The score is " + playerWins + " to " + computerWins + ". You're in the lead!")
        } else if (computerWins > playerWins) {
            console.log("The score is " + computerWins + " to " + playerWins + ". The computer's in the lead!")
        } else if (playerWins === computerWins) {
            console.log("The score is "  + playerWins + " to " + computerWins + ". It's a tie!")
        }
        if (playerWins >= 5) {
            console.log("YOU WON!!!");
            break;
        } else if (computerWins >= 5) {
            console.log("The computer won...");
            break;
        }
    }
}
let playerSelection = "Rock";
let computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;
// please don't try using runRound it nukes your computer
console.log(runRound());