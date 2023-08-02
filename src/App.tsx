import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainContainer from "./containers/MainContainer"
import SignupContainer from "./containers/SignupContainer"
import LoginContainer from "./containers/LoginContainer"
import GameContainer from "./containers/GameContainer"
import Navbar from "./components/Navbar"
import LeaderboardContainer from "./containers/LeaderboardContainer"


function App() {
  return (
    <div>
      <Navbar />
      <h1>Quidiom</h1>
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/signup' element={<SignupContainer />} />
        <Route path='/stats' element={<LeaderboardContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/game' element={<GameContainer />} />
      </Routes>
    </div>
  )
}

export default App