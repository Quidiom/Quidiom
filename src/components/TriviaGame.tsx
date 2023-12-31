import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCurrentQuestion, correctAnswer, toggleAnsweredCurrent, updateCurrentAnswer, updateCurrentColors, resetGame } from "../reducers/gameReducer";
import ChoiceBox from "./ChoiceBox";
import { useNavigate } from "react-router-dom";

function TriviaGame() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const questionList = useSelector((state: any) => state.game.questionList)
  const currentQuestion = useSelector((state: any) => state.game.currentQuestion)
  const answeredCurrent = useSelector((state: any) => state.game.answeredCurrent)
  const numCorrect = useSelector((state: any) => state.game.numCorrect)
  const difficulty = useSelector((state: any) => state.game.difficulty)
  const currentAnswer = useSelector((state: any) => state.game.currentAnswer)
  const username = useSelector((state: any) => state.login.loggedInUser)
  const currentColors = useSelector((state: any) => state.game.currentColors)

  const [currentChoices, setCurrentChoices] = useState([])

  useEffect(randomizeAnswer, [currentQuestion])
  useEffect(formatChoices, [currentAnswer, currentQuestion])
  useEffect(() => {
    if (currentQuestion === 9 && answeredCurrent === true && username.length > 0) {
      postResults()
    }
  }, [answeredCurrent])

  function handleNextClick() {
    dispatch(toggleAnsweredCurrent())
    dispatch(changeCurrentQuestion())
    dispatch(updateCurrentColors(["white", "white", "white", "white"]))
  }

  function handleGameClick(e: any) {
    console.log('Clicked on box ', e.target.id)
    console.log('The correct answer is', currentAnswer)
    console.log('The actual correct answer is', questionList[currentQuestion].correct_answer)
    const colorsCopy = currentColors.slice()
    if (e.target.id == currentAnswer) {
      colorsCopy[e.target.id] = 'green'
      dispatch(correctAnswer())
    } else {
      colorsCopy[e.target.id] = 'red'
      colorsCopy[currentAnswer] = 'green'
    }
    dispatch(updateCurrentColors(colorsCopy))
    dispatch(toggleAnsweredCurrent())
  }

  function randomizeAnswer() {
    const random = Math.floor(Math.random() * 4)
    dispatch(updateCurrentAnswer(random))
  }

  function formatChoices() {
    const choices: any = []
    let j = 0
    for (let i = 0; i < 4; i++) {
      if (currentAnswer != i) {
        choices.push(
          <ChoiceBox answer={questionList[currentQuestion].incorrect_answers[j]} idx={i} clickHandle={handleGameClick} />
        )
        j++
      } else {
        choices.push(
          <ChoiceBox answer={questionList[currentQuestion].correct_answer} idx={i} clickHandle={handleGameClick} />
        )
      }
    }
    setCurrentChoices(choices)
  }


  async function postResults() {
    const postBody: any = {
      username: username,
      numCorrect: numCorrect,
      difficulty: difficulty,
    }
    const postURL = '/api/updateScore'
    try {
      const response = await fetch(postURL, {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log('posted to db')
    }
    catch (e) {
      console.log('error posting scores', e)
    }
  }

  function handleReset() {
    dispatch(resetGame())
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center align-center'>
      <h3>
        Question {currentQuestion + 1} / 10
      </h3>
      {questionList.length &&
        <h3>{questionList[currentQuestion].question}</h3>}
      {currentChoices}
      {answeredCurrent && (currentQuestion !== 9) &&
        <button onClick={handleNextClick} className='border-black border-2 mt-5 mb-5 rounded-lg'>Next Question</button>
      }
      {(currentQuestion === 9) && (answeredCurrent) &&
        <div>
          <h4>
            Congratulations! You answered {numCorrect} questions correctly!
          </h4>
          <button onClick={handleReset}>Play again?</button>
        </div>
      }
    </div>
  )
}

export default TriviaGame