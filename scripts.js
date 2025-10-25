function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3)
    let result;
    if (rand === 0) {
        result = "Rock"
    } else if (rand === 1) {
        result = "Paper"
    } else {
        result = "Scissors"
    }
    console.log(result)
    return result
}

getComputerChoice();

function getHumanChoice () {
    let choice = prompt("Please choose Rock, Paper or Scissors")
    console.log(`You chose ${choice}`)
    return choice
}

getHumanChoice()