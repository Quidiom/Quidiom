import { createSlice } from '@reduxjs/toolkit';

interface gameState {
  questionList: [],
  category: string,
  difficulty: string,
  numCorrect: number,
  currentQuestion: number
}

const initialState: gameState = {
  questionList: [],
  category: '',
  difficulty: '',
  numCorrect: 0,
  currentQuestion: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
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
    }
  }
})

export const { chooseCategory, chooseDifficulty, correctAnswer, setQuestions, changeCurrentQuestion, resetGame } = gameSlice.actions

export default gameSlice.reducer