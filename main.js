const prompt = require('prompt-sync')()

let wins = 0
let losses = 0
let ties = 0

const choice = prompt(
  'Enter "R" for Rock, "P" for Paper, or "S" for Scissors: '
)
if (choice !== 'R' && choice !== 'P' && choice !== 'S') {
  console.log("Invalid input. Please enter 'R', 'P', or 'S'.")
}
