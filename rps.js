console.log("Type 'rock', 'paper', or 'scissors' into the prompt to select your choice!");

// generates random object
function getComputerChoiceRandom () {
    let computerChoice = Math.floor((Math.random() * (3)) + 1);
    return computerChoice
}

// returns counter to user's last played object
function getComputerChoiceLastCounter () {
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

// the next thing is very WIP, probably won't work
// records user plays 2 turns ago
function userRecord (input) {
    if (input === 1) {
        userPastPlays = userPastPlays + "1";
    } else if (input === 2) {
        userPastPlays = userPastPlays + "2";
    } else if (input === 3) {
        userPastPlays = userPastPlays + "3";
    } else {
        userPastPlays = "";
    }
}

// reads behavior of user when reacting to wins or losses, for some reason .replace isn't a function????
function userBehavior (winOrLoss){
    let roundMinus = i - 2;
    let round = userPastPlays.slice(roundMinus, i);
    let pastRound = round;
    let lastPickedPlus = lastPicked + 1;
    let lastPickedMinus = lastPicked - 1;
    if (winOrLoss = "w" && userPastPlays.slice(pastRound, i) == lastPicked) {
        return "The computer detects that you played the same thing after a win"
    } else if (winOrLoss = "l" && userPastPlays.slice(pastRound, i) == lastPicked) {
        return "The computer detects that you played the same thing after a loss"
    } else if (winOrLoss = "t" && userPastPlays.slice(pastRound, i) == lastPicked) {
        return "The computer detects that you played the same thing after a tie"
    } else if (winOrLoss = "w" && userPastPlays.slice(pastRound, i) == lastPickedPlus.replace("4", "1")) {
        return "The computer detects that you played what beats your previous thing after a win"
    } else if (winOrLoss = "l" && userPastPlays.slice(pastRound, i) == lastPickedPlus.replace("4", "1")) {
        return "The computer detects that you played what beats your previous thing after a loss"
    } else if (winOrLoss = "t" && userPastPlays.slice(pastRound, i) == lastPickedPlus.replace("4", "1")) {
        return "The computer detects that you played what beats your previous thing after a tie"
    } else if (winOrLoss = "w" && userPastPlays.slice(pastRound, i) == lastPickedMinus.replace("0", "3")) {
        return "The computer detects that you played what counters what beats your previous thing after a win"
    } else if (winOrLoss = "l" && userPastPlays.slice(pastRound, i) == lastPickedMinus.replace("0", "3")) {
        return "The computer detects that you played what counters what beats your previous thing after a loss"
    } else if (winOrLoss = "t" && userPastPlays.slice(pastRound, i) == lastPickedMinus.replace("0", "3")) {
        return "The computer detects that you played what counters what beats your previous thing after a tie"
    }
}

// WIP things end here
// runs one round of RPS
function rockPaperScissors (playerSelection, computerSelection) {
    // 1 = rock, 2 = paper, 3 = scissors
    if ((computerSelection === 1 && playerSelection === "rock") ||
    (computerSelection === 2 && playerSelection === "paper") ||
    (computerSelection === 3 && playerSelection === "scissors")) {
        lastPicked = lastPlayed(playerSelection);
        roundResult = "t";
        return ("It was a tie! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else if ((playerSelection === "rock" && computerSelection == 2 ||
    (playerSelection === "paper" && computerSelection === 3) ||
    (playerSelection === "scissors" && computerSelection === 1))) {
        computerWins++;
        lastPicked = lastPlayed(playerSelection);
        roundResult = "l";
        return ("You lose! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else if ((playerSelection === "paper" && computerSelection === 1) ||
    (playerSelection === "scissors" && computerSelection === 2) ||
    (playerSelection === "rock" && computerSelection === 3)) {
        playerWins++
        lastPicked = lastPlayed(playerSelection);
        roundResult = "w";
        return ("You win! The computer picked " + computerSelection + " and you picked " + playerSelection +".");
    } else {
        console.log("The values were " + computerSelection + " and " + playerSelection);
        return ("Something is broken");
    }
}
// runs an ft5 game of RPS
function runRound () {
    for (i = 0; i < 10; i++) {
      if (i = 0) {
            let computerPick = getComputerChoiceRandom();
            let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'!").toLowerCase();
            console.log(rockPaperScissors(playerSelection, computerPick))
            userRecord(lastPicked);
//            console.log(userBehavior(roundResult));
       } else {
            computerPick = getComputerChoiceLastCounter();
            playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'!").toLowerCase();
            console.log(rockPaperScissors(playerSelection, computerPick))
            userRecord(lastPicked);
//            console.log(userBehavior(roundResult));
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
            console.log()
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
let lastPicked;
let roundResult;
let userPastPlays = "";
let i = 0
console.log(runRound());
console.log("Thanks for playing!");