import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainContainer from "./containers/MainContainer"
import SignupContainer from "./containers/SignupContainer"
import LoginContainer from "./containers/LoginContainer"
import GameContainer from "./containers/GameContainer"
import Navbar from "./components/Navbar"
import LeaderboardContainer from "./containers/LeaderboardContainer"
import '../src/style.css';

function App(props: any):any {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
      <h1 className='text-6xl italic'>Quidiom</h1>
      <h4>America's #1 Online Trivia App</h4>
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