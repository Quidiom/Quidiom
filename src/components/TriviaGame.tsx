import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCurrentQuestion, correctAnswer, toggleAnsweredCurrent, updateCurrentAnswer, updateCurrentColors } from "../reducers/gameReducer";
import ChoiceBox from "./ChoiceBox";

function TriviaGame() {
  const dispatch = useDispatch()

  const questionList = useSelector((state: any) => state.game.questionList)
  const currentQuestion = useSelector((state: any) => state.game.currentQuestion)
  const answeredCurrent = useSelector((state: any) => state.game.answeredCurrent)
  const numCorrect = useSelector((state: any) => state.game.numCorrect)
  const difficulty = useSelector((state: any) => state.game.difficulty)
  // const currentChoices = useSelector((state: any) => state.game.currentChoices)
  const currentAnswer = useSelector((state: any) => state.game.currentAnswer)
  const username = useSelector((state: any) => state.login.loggedInUser)
  const currentColors = useSelector((state: any) => state.game.currentColors)

  // const [choicesColors, setChoicesColors] = useState(['white', 'white', 'white', 'white'])
  const [currentChoices, setCurrentChoices] = useState([])

  useEffect(formatChoices, [])
  useEffect(formatChoices, [currentQuestion])

  function handleNextClick() {
    dispatch(toggleAnsweredCurrent())
    dispatch(changeCurrentQuestion())
    dispatch(updateCurrentColors(["white", "white", "white", "white"]))
  }

  function handleGameClick(e: any) {
    const colorsCopy = currentColors.slice()
    if (e.target.id == currentAnswer) {
      colorsCopy[e.target.id] = 'green'
      dispatch(correctAnswer())
    } else {
      colorsCopy[e.target.id] = 'red'
      colorsCopy[currentAnswer] = 'green'
    }
    // setChoicesColors(colorsCopy)
    dispatch(updateCurrentColors(colorsCopy))
    dispatch(toggleAnsweredCurrent())
  }

  function formatChoices() {
    const choices: any = []
    const random = Math.floor(Math.random() * 4)
    let j = 0
    for (let i = 0; i < 4; i++) {
      if (random !== i) {
        choices.push(
          <ChoiceBox answer={questionList[currentQuestion].incorrect_answers[j]} idx={i} clickHandle={handleGameClick} />
        )
        j++
      } else {
        choices.push(
          <ChoiceBox answer={questionList[currentQuestion].correct_answer} idx={random} clickHandle={handleGameClick} />
        )
      }
    }
    // choices.splice(random, 0, <ChoiceBox answer={questionList[currentQuestion].correct_answer} idx={random} clickHandle={handleGameClick} />)
    dispatch(updateCurrentAnswer(random))
    // dispatch(updateCurrentChoices(choices))
    setCurrentChoices(choices)
  }

  function postResults() {
    const body = {
      username: username,
      numCorrect: numCorrect,
      difficulty: difficulty,
    }
  }

  return (
    <div>
      {questionList.length &&
        <h3>{questionList[currentQuestion].question}</h3>}
      {currentChoices}
      {answeredCurrent &&
        <button onClick={handleNextClick}>Next Question</button>
      }
    </div>
  )
}

export default TriviaGame