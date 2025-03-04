function getComputerChoice() {
    const n = Math.floor(Math.random() * 2.99);
    switch (n) {
        case 0:
            return("rock");
        case 1:
            return("paper");
        case 2:
            return("scissors");
        default:
            console.log("error generating computer choice");
            return("");
    }

}

function getHumanChoice() {
    const choice = parseInt(prompt(`    1 : rock
    2: paper
    3: scissors`));
    // I know it's meant for the user to type the whole words, but I'm lazy like that
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("Invalid choice");
            return "";
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a draw");
        } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Final score:
    you: ${humanScore}
    computer: ${computerScore}`);
}

playGame();
