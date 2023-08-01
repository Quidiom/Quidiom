import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCurrentQuestion, correctAnswer, toggleAnsweredCurrent, updateCurrentAnswer, updateCurrentChoices } from "../reducers/gameReducer";
import ChoiceBox from "./ChoiceBox";

function TriviaGame() {
  const dispatch = useDispatch()

  const questionList = useSelector((state: any) => state.game.questionList)
  const currentQuestion = useSelector((state: any) => state.game.currentQuestion)
  const answeredCurrent = useSelector((state: any) => state.game.answeredCurrent)
  const numCorrect = useSelector((state: any) => state.game.numCorrect)
  const difficulty = useSelector((state: any) => state.game.difficulty)
  const currentChoices = useSelector((state: any) => state.game.currentChoices)
  const currentAnswer = useSelector((state: any) => state.game.currentAnswer)
  const username = useSelector((state: any) => state.login.loggedInUser)

  useEffect(formatChoices, [currentQuestion])

  function handleNextClick() {
    dispatch(toggleAnsweredCurrent())
    dispatch(changeCurrentQuestion())
  }

  function handleGameClick(e: any) {
    if (e.target.id == currentAnswer) {
      e.target.style.backgroundColor = 'green'
      dispatch(correctAnswer())
    } else {
      e.target.style.backgroundColor = 'red'
      currentChoices[currentAnswer].style.backgroundColor = 'green'
    }
    dispatch(toggleAnsweredCurrent())
  }

  function formatChoices() {
    const choices: React.JSX.Element[] = []
    const random = Math.floor(Math.random() * 4)
    for (let i = 0; i < questionList[currentQuestion].incorrect_answers.length + 1; i++) {
      if (random !== i) {
        choices.push(
          <ChoiceBox answer={questionList[currentQuestion].incorrect_answers[i]} idx={i} clickHandle={handleGameClick} />
        )
      }
    }
    choices.splice(random, 0, <ChoiceBox answer={questionList[currentQuestion].correct_answer} idx={random} clickHandle={handleGameClick} />)
    dispatch(updateCurrentAnswer(random))
    dispatch(updateCurrentChoices(choices))
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
      <h3>{questionList[currentQuestion].question}</h3>
      {currentChoices}
      {answeredCurrent &&
        <button onClick={handleNextClick}>Next Question</button>
      }
    </div>
  )
}

export default TriviaGame