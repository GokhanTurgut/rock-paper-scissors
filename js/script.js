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

const result = document.querySelector(".result");
const yourScore = document.querySelector(".yourScore");
const computerScore = document.querySelector(".computerScore");

let yourScoreInt = 0;
let computerScoreInt = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie you both choose ${playerSelection}!`;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        result.textContent = `Player wins, ${playerSelection} beats ${computerSelection}!`;
        yourScoreInt++;
        yourScore.textContent = yourScoreInt;
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        result.textContent = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
        computerScoreInt++;
        computerScore.textContent = computerScoreInt;
    }
}

const restartBtn = document.querySelector(".restartBtn");

restartBtn.addEventListener("click", () => {
    yourScoreInt = 0;
    computerScoreInt = 0;
    yourScore.textContent = yourScoreInt;
    computerScore.textContent = computerScoreInt;
})

playerPlay();