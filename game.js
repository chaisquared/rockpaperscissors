function playGame() {
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

   function getHumanChoice() {
      let choice = prompt("Rock, paper or scissors?")
      let humanChoice
      if (choice.toLowerCase() == "rock") {
         humanChoice = "rock"
      } else if (choice.toLowerCase() == "paper") {
         humanChoice = "paper"
      } else if (choice.toLowerCase() == "scissors") {
         humanChoice = "scissors"
      } else {
         alert("Invalid input! Please stick to rock, paper or scissors!")
      }
      return humanChoice
   }


   let humanScore = 0
   let computerScore = 0

   function playRound(humanChoice, computerChoice) {
      // let message
      if (humanChoice == computerChoice) {
         alert("Draw! Human and computer picked " + humanChoice + "!")
      } else if (humanChoice == "rock" && computerChoice == "scissors") {
         alert("Rock beats scissors! Human wins")
         humanScore = (humanScore + 1)
      } else if (humanChoice == "rock" && computerChoice == "paper") {
         alert("Paper beats rock! Computer wins")
         computerScore = (computerScore + 1)
      } else if (humanChoice == "paper" && computerChoice == "rock") {
         alert("Paper beats rock! Human wins")
         humanScore = (humanScore + 1)
      } else if (humanChoice == "paper" && computerChoice == "scissors") {
         alert("Scissors beat paper! Computer wins")
         computerScore = (computerScore + 1)
      } else if (humanChoice == "scissors" && computerChoice == "paper") {
         alert("Scissors beat paper! Human wins")
         humanScore = (humanScore + 1)
      } else if (humanChoice == "scissors" && computerChoice == "rock") {
         alert("Rock beats scissors! Computer wins")
         computerScore = (computerScore + 1)
      }
   }

   let humanSelection = getHumanChoice()
   let computerSelection = getComputerChoice()
   playRound(humanSelection, computerSelection)
   humanSelection = getHumanChoice()
   computerSelection = getComputerChoice()
   playRound(humanSelection, computerSelection)
   humanSelection = getHumanChoice()
   computerSelection = getComputerChoice()
   playRound(humanSelection, computerSelection)
   humanSelection = getHumanChoice()
   computerSelection = getComputerChoice()
   playRound(humanSelection, computerSelection)
   humanSelection = getHumanChoice()
   computerSelection = getComputerChoice()
   playRound(humanSelection, computerSelection)
   alert("Game over! Human: " + humanScore + " Computer: " + computerScore)
}

playGame()