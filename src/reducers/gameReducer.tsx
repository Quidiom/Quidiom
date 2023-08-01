import { createSlice } from '@reduxjs/toolkit';

interface gameState {
  gameStarted: boolean,
  questionList: [],
  category: string,
  difficulty: string,
  numCorrect: number,
  currentQuestion: number,
  answeredCurrent: boolean,
  currentColors: string[],
  currentAnswer: number
}

const initialState: gameState = {
  gameStarted: false,
  questionList: [],
  category: '',
  difficulty: '',
  numCorrect: 0,
  currentQuestion: 0,
  answeredCurrent: false,
  currentColors: ['white', 'white', 'white', 'white'],
  currentAnswer: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameStarted = true
    },
    chooseCategory: (state, action) => {
      state.category = action.payload
    },
    chooseDifficulty: (state, action) => {
      state.difficulty = action.payload
    },
    correctAnswer: (state) => {
      state.numCorrect += 1
    },
    setQuestions: (state, action) => {
      state.questionList = action.payload
    },
    changeCurrentQuestion: (state) => {
      state.currentQuestion += 1
    },
    resetGame: (state) => {
      state = initialState
    },
    toggleAnsweredCurrent: (state) => {
      state.answeredCurrent = !state.answeredCurrent
    },
    updateCurrentColors: (state, action) => {
      state.currentColors = action.payload
    },
    updateCurrentAnswer: (state, action) => {
      state.currentAnswer = action.payload
    }
  }
})

export const { startGame, chooseCategory, chooseDifficulty, correctAnswer, setQuestions, changeCurrentQuestion, resetGame, toggleAnsweredCurrent, updateCurrentColors, updateCurrentAnswer } = gameSlice.actions

export default gameSlice.reducer