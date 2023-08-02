import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='flex flex-row justify-between w-full bg-blue-300 font-bold'>
      <Link to='/'>Home</Link>
      <Link to='/game'>Game</Link>
      <Link to='/stats'>Leaderboard</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </nav>
  )
}

export default Navbar