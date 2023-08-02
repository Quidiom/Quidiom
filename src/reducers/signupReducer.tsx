import { createSlice } from "@reduxjs/toolkit";

interface signupState {
  username: string,
  password: string,
  confirmPassword: string,
  failedSignup: boolean
}

const initialState: signupState = {
  username: '',
  password: '',
  confirmPassword: '',
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
    updateConfirmSignupPassword: (state, action) => {
      state.confirmPassword = action.payload
    },
    failedSignup: (state) => {
      state.failedSignup = true
    },
    resetState: (state) => {
      state = initialState
    }
  }
})

export const { updateSignupUsername, updateSignupPassword, updateConfirmSignupPassword, failedSignup, resetState } = signupSlice.actions

export default signupSlice.reducer