function computerPlay() {
    let randomNumber = Math.random();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (randomNumber <= 0.3333) {
        return rock;
    }
    else if (0.3333 < randomNumber && randomNumber <= 0.6666) {
        return paper;
    }
    else if (0.6666 < randomNumber) {
        return scissors;
    }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let computerSelection;
let playerSelection;

function playerPlay() {
    rockBtn.addEventListener("click", () => {
        playerSelection = "rock";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
    
    paperBtn.addEventListener("click", () => {
        playerSelection = "paper";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });

    scissorsBtn.addEventListener("click", () => {
        playerSelection = "scissors";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie you both choose ${playerSelection}!`);
        console.log(`Score is Player = ${playerScore} and Computer = ${computerScore}`);
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore += 1;
        console.log(`Player wins, ${playerSelection} beats ${computerSelection}!`);
        console.log(`Score is Player = ${playerScore} and Computer = ${computerScore}`);

    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore += 1;
        console.log(`Computer wins, ${computerSelection} beats ${playerSelection}!`);
        console.log(`Score is Player = ${playerScore} and Computer = ${computerScore}`);

    }
}

let playerScore = 0;
let computerScore = 0;

function game() {

    playerScore = 0;
    computerScore = 0;

    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        
        playRound(playerSelection, computerSelection);
    }

}