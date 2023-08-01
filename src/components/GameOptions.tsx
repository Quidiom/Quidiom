import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { chooseCategory, chooseDifficulty, startGame, setQuestions } from "../reducers/gameReducer"
import { categoryObj, categoryKey } from "../types"
import { useNavigate } from "react-router-dom"

function GameOptions(): React.JSX.Element {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const category: categoryKey = useSelector((state: any) => state.game.category)
  const difficulty = useSelector((state: any) => state.game.difficulty)

  const baseURL = 'https://opentdb.com/api.php?amount=10'

  const categoryNums: categoryObj = {
    'General': '9',
    'History': '23',
    'Science': '17',
    'Sports': '21',
    'Geography': '22',
    'Film': '11',
  }

  function handleChange(e: any) {
    if (e.target.name === 'selectCategory') {
      dispatch(chooseCategory(e.target.value))
    } else if (e.target.name === 'selectDifficulty') {
      dispatch(chooseDifficulty(e.target.value))
    }
  }

  function handleClick(e: any) {
    e.preventDefault()
    fetchQuestions()
    dispatch(startGame())
    //redirect to /game path
    setTimeout(() => { navigate('/game') }, 500)
  }

  async function fetchQuestions() {
    const customURL = baseURL + '&category=' + categoryNums[category] + '&difficulty=' + difficulty + '&type=multiple'
    try {
      const response = await fetch(customURL)
      const data = await response.json()
      console.log(data)
      dispatch(setQuestions(data.results))
    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <div id='gameOptions'>
      <p>Choose a category</p>
      <select onChange={(e) => handleChange(e)} name='selectCategory'>
        <option value=''>Select a Category</option>
        <option value='General'>General</option>
        <option value='History'>History</option>
        <option value='Science'>Science</option>
        <option value='Sports'>Sports</option>
        <option value='Geography'>Geography</option>
        <option value='Film'>Film</option>
      </select>
      <p>Choose a difficulty</p>
      <select onChange={(e) => handleChange(e)} name='selectDifficulty'>
        <option value=''>Select a Difficulty</option>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
      <button onClick={(e) => { handleClick(e) }}>Play!</button>
    </div>
  )
}

export default GameOptions