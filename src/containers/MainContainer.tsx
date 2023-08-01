import React from "react"
import Login from "../components/Login"
import GameOptions from "../components/GameOptions"

function MainContainer(): React.JSX.Element {
  return (
    <div>
      <Login />
      Main Container
      <GameOptions></GameOptions>
    </div>
  )
}

export default MainContainer