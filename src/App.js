import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random()* board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random()* board.length))
  
  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]
    if(index === treasureLocation) {
      updatedBoard[index] = "💎"
    setBoard(updatedBoard)
    }
    else if (index === bombLocation) {
      updatedBoard[index] = "💣"
      setBoard(updatedBoard)
    }
    else {

    
    updatedBoard[index] = "🌴"
    setBoard(updatedBoard)
  }
  }
  const restartGame = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    setTreasureLocation(Math.floor(Math.random()* board.length))
    setBombLocation(Math.floor(Math.random()* board.length))
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "gameboard">
      {board.map((value, index) => {
        return <Square
        value ={value}
        key={index}
        index={index}
        handleGamePlay={handleGamePlay}
        />
      })}
      </div>
      <div className="button" onClick={restartGame}><button >Play Again</button></div>
    </>
  )
}

export default App
