console.log("Type 'rock', 'paper', or 'scissors' into the prompt to select your choice!");

// random choice of rock, paper, or scissors
function getComputerChoiceRandom () {
    let computerChoice = Math.floor((Math.random() * (3)) + 1);
    return computerChoice
}

// random integer between 1 and 4
function roulette () {
    let computerChoice = Math.floor((Math.random() * (4)) + 1);
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

// returns counter to counter to user's last played object 
function getComputerChoiceLastRead () {
    if (lastPicked == 1) {
        return 3;
    } else if (lastPicked == 2) {
        return 1;
    } else if (lastPicked == 3){
        return 2;
    } else {
        return getComputerChoiceRandom();
    }
}

// returns same object as user's last played object
function getComputerChoiceLastMatch () {
    return lastPicked
}

// records user plays, not used but it's a nice piece of code so i'm keeping it for possible future usage
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

function computerOverarchChoice () {
    if (roulette() === 1) {
        return getComputerChoiceLastMatch();
    } else if (roulette() === 2) {
        return getComputerChoiceLastRead();
    } else if (roulette() === 3) {
        return getComputerChoiceLastCounter();
    } else if (roulette() === 4) {
        return getComputerChoiceRandom();
    }
}
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
    for (i = 0; i < 15; i++) {
        let computerPick = computerOverarchChoice();
        let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'!").toLowerCase();
        console.log(rockPaperScissors(playerSelection, computerPick))
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


const rock = document.querySelector('#rock')
rock.addEventListener ('click', function(e) {
    result.textContent = rockPaperScissors ("rock", getComputerChoiceRandom());
    resultCounter.appendChild(result);
}); 

const paper = document.querySelector('#paper')
paper.addEventListener ('click', function(e) {
    result.textContent = rockPaperScissors ("paper", getComputerChoiceRandom());
    resultCounter.appendChild(result);
}); 

const scissors = document.querySelector('#scissors')
scissors.addEventListener ('click', function(e) {
    result.textContent = rockPaperScissors ("scissors", getComputerChoiceRandom());
    resultCounter.appendChild(result);
}); 

const resultCounter = document.querySelector('#resultcounter');
const result = document.createElement('div');
result.classList.add('content');

let playerWins = 0;
let computerWins = 0;
let lastPicked;
let roundResult;
let userPastPlays = "";
let i = 0
// console.log(runRound());
console.log("Thanks for playing!");