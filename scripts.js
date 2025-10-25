function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3)
    let result;
    if (rand === 0) {
        result = "rock"
    } else if (rand === 1) {
        result = "paper"
    } else {
        result = "scissors"
    }
    //    console.log(result) // Uncomment to debug computer's choice
    return result
}

function getHumanChoice () {
    let choice = prompt("Please choose Rock, Paper or Scissors")
    console.log(`You chose ${choice}`)
    return choice
}

let humanScore = 0, computerScore = 0;


function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Draw!")
    } else if (humanChoice === "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors beats Paper")
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore++;
    } else {
        console.log("You Win!")
        humanScore++;
    }
}

humanScore = 0;
computerScore = 0;

function playGame(rounds = 5) {
    for (let i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        humanSelection = humanSelection.trim().toLowerCase();

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playGame(5);
