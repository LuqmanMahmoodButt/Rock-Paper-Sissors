import './App.css'
import React from 'react'


function App() {
  

  const [playerChoice, setPlayerChoice] = React.useState("") 
  const [computerChoice, setComputerChoice] = React.useState(Math.floor(Math.random() * 3))

  const choices = ["Rock", "Paper", "Scissors"]



  function handleClick(e) {

    setPlayerChoice(e.target.innerText)
    const randomChoice = Math.floor (Math.random() * choices.length)
    setComputerChoice(choices[randomChoice])
    gameResult()

  }
  
  console.log("player", playerChoice);
  console.log("computer", computerChoice)
  
  
  const gameResult = () => {
    
    if (playerChoice === 'Rock' && computerChoice === "Scissors")  {
      return "Player Wins"
    } else if (playerChoice === 'Rock' && computerChoice === "Paper"){
      return "Computer Wins"
    } else if (playerChoice === 'Scissors' && computerChoice === "Paper"){
      return "Player Wins"
    } else if (playerChoice === 'Scissors' && computerChoice === "Rock") {
      return "Computer Wins"
    } else if (playerChoice === 'Paper' && computerChoice === "Rock") {
      return "Player Wins"
    } else if (playerChoice === 'Paper' && computerChoice === "Scissors") {
      return "Computer Wins"
    } else if (playerChoice && computerChoice) {
      return "It's a Draw"
    } else {
      return "Click to Play"
    }
  }

    function handleReset() {
      setPlayerChoice()
      setComputerChoice()
    }
  
  
  return (
    
    <div className="game">
      <p>Player  Chose: <span>{playerChoice}</span></p>
      <p>Computer Chose: <span>{computerChoice}</span></p>
      <p className="result">{gameResult()}</p>
      <button onClick={handleClick}>Rock</button>
      <button onClick={handleClick}>Paper</button>
      <button onClick={handleClick}>Scissors</button>
      <button onClick={handleReset} id="reset">Reset</button>
    </div>

  )
}


export default App
