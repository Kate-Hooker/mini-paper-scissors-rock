const prompt = require('prompt-sync')()

let wins = 0
let losses = 0
let ties = 0

while (true) {
  const choice = prompt(
    'Enter "R" for Rock, "P" for Paper, or "S" for Scissors, or "Q" to quit: '
  )
  if (choice === 'Q') {
    console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`)
    break
  }
  if (choice !== 'R' && choice !== 'P' && choice !== 'S') {
    console.log("Invalid input. Please enter 'R', 'P', or 'S' or 'Q' to quit.")
    continue
  }

  const randomIndex = Math.round(Math.random() * 2)
  const choices = ['R', 'P', 'S']

  const computerChoice = choices[randomIndex]

  console.log(`Computer chose ${computerChoice}.`)
  if (computerChoice === choice) {
    console.log(`Tie!`)
    ties++
  } else if (
    (computerChoice === 'R' && choice === 'S') ||
    (computerChoice === 'P' && choice === 'R') ||
    (computerChoice === 'S' && choice === 'P')
  ) {
    console.log(`You lose!`)
    losses++
  } else {
    console.log(`You win!`)
    wins++
  }
}
console.log(`Thanks for playing!`)
