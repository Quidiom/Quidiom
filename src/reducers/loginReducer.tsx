import { createSlice } from "@reduxjs/toolkit";

interface loginState {
  username: string,
  password: string,
  loggedIn: boolean,
  loggedInUser: string,
  failedLogin: boolean
}

const initialState: loginState = {
  username: '',
  password: '',
  loggedIn: false,
  loggedInUser: '',
  failedLogin: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateLoginUsername: (state, action) => {
      state.username = action.payload
    },
    updateLoginPassword: (state, action) => {
      state.password = action.payload
    },
    failedLogin: (state, action) => {
      state.failedLogin = action.payload
    },
    successfulLogin: (state, action) => {
      state = {
        ...initialState,
        loggedIn: true,
        loggedInUser: action.payload
      }
    },
    logout: (state) => {
      state = initialState
    }
  }
})

export const { updateLoginUsername, updateLoginPassword, failedLogin, successfulLogin, logout } = loginSlice.actions

export default loginSlice.reducer