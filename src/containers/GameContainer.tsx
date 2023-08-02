import React from "react"
import TriviaGame from "../components/TriviaGame"
import { useSelector } from "react-redux"

function GameContainer(): React.JSX.Element {
  const gameStarted = useSelector((state: any) => state.game.gameStarted)

  return (
    <div>
      <h1>Let's play Quidiom!</h1>
      {gameStarted ?
        <TriviaGame /> :
        <h2>Please select a category and difficulty to play!</h2>
      }
    </div>
  )
}

export default GameContainer