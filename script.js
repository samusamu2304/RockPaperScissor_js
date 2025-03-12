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
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        score.textContent = ("It's a draw");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        score.textContent = (`You win!, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        score.textContent = (`You lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    if (computerScore === 5) {
        score.textContent = "You lose!";
    } else if (humanScore === 5){
        score.textContent = "You win!";
    }
    score.textContent += ` human:${humanScore}  computer:${computerScore}`;
}
const buttons = document.querySelectorAll(".userChoice");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice())
    });
})

const score = document.querySelector(".result");

let computerScore = 0;
let humanScore = 0;