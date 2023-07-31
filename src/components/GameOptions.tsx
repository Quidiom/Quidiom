import React from "react"

function GameOptions(): React.JSX.Element {

  function handleClick(e: any) {
    console.log(e.target)
    return e.target
  }

  return (
    <div>
      <p>Choose a category</p>
      <select name='selectCategory'>
        <option value='General'>General</option>
        <option value='History'>History</option>
        <option value='Science'>Science</option>
        <option value='Sports'>Sports</option>
        <option value='Geography'>Geography</option>
        <option value='Film'>Film</option>
      </select>
      <p>Choose a difficulty</p>
      <select name='selectDifficulty'>
        <option value='Easy'>Easy</option>
        <option value='Medium'>Medium</option>
        <option value='Hard'>Hard</option>
      </select>
      <button onClick={(e) => { handleClick(e) }}>Play!</button>
    </div>
  )
}

export default GameOptions