let choices = ['rock', 'paper', 'scissors']

function compChoice() {
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let compChoice = choices[choiceIndex]
  return compChoice
}

function drawResult(results) {
  document.getElementById("result").innerText = results
}

function play(userChoice) {
  let AI = compChoice()
  console.log('you picked ', userChoice, 'computer picked', AI);

  if (userChoice === AI) {
    drawResult('Game Result: Its a DRAW!')
  }
  else if (userChoice === 'rock' && AI === 'paper') {
    drawResult('Game Result: You LOSE!')
  }
  else if (userChoice === 'paper' && AI === 'scissors') {
    drawResult('Game Result: You LOSE!')
  }
  else if (userChoice === 'scissors' && AI === 'rock') {
    drawResult('Game Result: You LOSE!')
  }
  else if (userChoice === 'rock' && AI === 'scissors') {
    drawResult('Game Result: You WIN!')
  }
  else if (userChoice === 'scissors' && AI === 'paper') {
    drawResult('Game Result: You WIN!')
  }
  else if (userChoice === 'paper' && AI === 'rock') {
    drawResult('Game Result: You WIN!')
  }
}

