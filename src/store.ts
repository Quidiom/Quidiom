import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameReducer";
import loginReducer from "./reducers/loginReducer";
import signupReducer from "./reducers/signupReducer";

const store = configureStore({
  reducer: {
    game: gameReducer,
    login: loginReducer,
    signup: signupReducer
  }
})

export default store