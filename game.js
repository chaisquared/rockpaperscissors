function getComputerChoice() {
   let number = Math.floor(Math.random() * 3)
   let computerChoice
   if (number == 0) {
      computerChoice = "rock"
   } else if (number == 1) {
      computerChoice = "paper"
   } else if (number == 2) {
      computerChoice = "scissors"
   } else {
      throw Error("Computer choice out of acceptable range");
   }
   return computerChoice
}

let humanScore = 0
let computerScore = 0

let humanScoreDisplay = document.getElementById('humanScore')
let computerScoreDisplay = document.getElementById('computerScore')
let messageDisplay = document.getElementById('message')

let allButtons = document.getElementsByTagName('button')


function playRound(humanChoice) {
   let computerChoice = getComputerChoice();
   if (humanChoice == computerChoice) {
      messageDisplay.textContent = "Draw! Human and computer picked " + humanChoice + "!"
   } else if (humanChoice == "rock" && computerChoice == "scissors") {
      messageDisplay.textContent = "Rock beats scissors! Human wins"
      humanScore = (humanScore + 1)
   } else if (humanChoice == "rock" && computerChoice == "paper") {
      messageDisplay.textContent = "Paper beats rock! Computer wins"
      computerScore = (computerScore + 1)
   } else if (humanChoice == "paper" && computerChoice == "rock") {
      messageDisplay.textContent = "Paper beats rock! Human wins"
      humanScore = (humanScore + 1)
   } else if (humanChoice == "paper" && computerChoice == "scissors") {
      messageDisplay.textContent = "Scissors beat paper! Computer wins"
      computerScore = (computerScore + 1)
   } else if (humanChoice == "scissors" && computerChoice == "paper") {
      messageDisplay.textContent = "Scissors beat paper! Human wins"
      humanScore = (humanScore + 1)
   } else if (humanChoice == "scissors" && computerChoice == "rock") {
      messageDisplay.textContent = "Rock beats scissors! Computer wins"
      computerScore = (computerScore + 1)
   }

   humanScoreDisplay.textContent = `Human: ${humanScore}`
   computerScoreDisplay.textContent = `Computer: ${computerScore}`


   if (humanScore == 5 || computerScore == 5) {
      messageDisplay.textContent = "Game over! Human: " + humanScore + " Computer: " + computerScore
      for (let i = 0; i < allButtons.length; i++) {
         allButtons[i].disabled = true;
      }
   }
}


function playGame() {


   // function getHumanChoice() {
   //    let choice = prompt("Rock, paper or scissors?")
   //    let humanChoice
   //    if (choice.toLowerCase() == "rock") {
   //       humanChoice = "rock"
   //    } else if (choice.toLowerCase() == "paper") {
   //       humanChoice = "paper"
   //    } else if (choice.toLowerCase() == "scissors") {
   //       humanChoice = "scissors"
   //    } else {
   //       alert("Invalid input! Please stick to rock, paper or scissors!")
   //    }
   //    return humanChoice
   // }







}

// let humanSelection = getHumanChoice()
// let computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)
// humanSelection = getHumanChoice()
// computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)
// humanSelection = getHumanChoice()
// computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)
// humanSelection = getHumanChoice()
// computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)
// humanSelection = getHumanChoice()
// computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)
// alert("Game over! Human: " + humanScore + " Computer: " + computerScore)


// playGame()
