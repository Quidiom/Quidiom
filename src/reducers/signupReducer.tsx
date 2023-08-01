import { createSlice } from "@reduxjs/toolkit";

interface signupState {
  username: string,
  password: string,
  failedSignup: boolean
}

const initialState: signupState = {
  username: '',
  password: '',
  failedSignup: false
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignupUsername: (state, action) => {
      state.username = action.payload
    },
    updateSignupPassword: (state, action) => {
      state.password = action.payload
    },
    failedSignup: (state, action) => {
      state.failedSignup = true
    },
    resetState: (state) => {
      state = initialState
    }
  }
})

export const { updateSignupUsername, updateSignupPassword, failedSignup, resetState } = signupSlice.actions

export default signupSlice.reducer