console.log("Type 'rock', 'paper', or 'scissors' into the prompt to select your choice!");

// generates random object
function getComputerChoiceRandom () {
    let computerChoice = Math.floor((Math.random() * (3)) + 1);
    return computerChoice
}

// returns counter to user's last played object
function getComputerChoiceLastCounter (lastPicked) {
    if (lastPicked == 1) {
        return 2;
    } else if (lastPicked == 2) {
        return 3;
    } else if (lastPicked == 3){
        return 1;
    } else {
        return getComputerChoiceRandom();
    }
}

// runs one round of RPS
function rockPaperScissors (playerSelection, computerSelection) {
    // 1 = rock, 2 = paper, 3 = scissors
    if ((computerSelection === 1 && playerSelection === "rock") ||
    (computerSelection === 2 && playerSelection === "paper") ||
    (computerSelection === 3 && playerSelection === "scissors")) {
        return ("It was a tie! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
        let lastPicked = lastPlayed(computerSelection);
    } else if ((playerSelection === "rock" && computerSelection == 2 ||
    (playerSelection === "paper" && computerSelection === 3) ||
    (playerSelection === "scissors" && computerSelection === 1))) {
        computerWins++;
        let lastPicked = lastPlayed(computerSelection);
        return ("You lose! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else if ((playerSelection === "paper" && computerSelection === 1) ||
    (playerSelection === "scissors" && computerSelection === 2) ||
    (playerSelection === "rock" && computerSelection === 3)) {
        playerWins++
        let lastPicked = lastPlayed(computerSelection);
        return ("You win! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else {
        console.log("The values were " + computerSelection + " and " + playerSelection);
        return ("Something is broken");
    }
}
// runs an ft5 game of RPS
function runRound () {
    for (let i = 0; i < 10; i++) {
      if (i = 0) {
            let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'!").toLowerCase();
            console.log(rockPaperScissors(playerSelection, getComputerChoiceRandom()))
       } else {
            let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'!").toLowerCase();
            console.log(rockPaperScissors(playerSelection, getComputerChoiceLastCounter()))
        }
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
// returns user's last played object in numerical form
function lastPlayed (input){
    let lastPlay;
    if (input === "rock") {
        lastPlay = 1;
    } else if (input === "paper") {
        lastPlay = 2;
    } else if (input === "scissors") {
        lastPlay = 3;
    } else {
        lastPlay = getComputerChoiceRandom();
    }
    return lastPlay
}

let playerWins = 0;
let computerWins = 0;
console.log(runRound());