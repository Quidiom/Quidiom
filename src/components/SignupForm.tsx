import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateConfirmSignupPassword, updateSignupPassword, updateSignupUsername } from "../reducers/signupReducer";


function SignupForm(): React.JSX.Element {
  const dispatch = useDispatch()

  const username = useSelector((state: any) => state.signup.username)
  const password = useSelector((state: any) => state.signup.password)
  const confirmPassword = useSelector((state: any) => state.signup.confirmPassword)

  function handleChange(e: any) {
    if (e.target.name === "username") {
      dispatch(updateSignupUsername(e.target.value))
    } else if (e.target.name === "password") {
      dispatch(updateSignupPassword(e.target.value))
    } else if (e.target.name === "confirmPassword") {
      dispatch(updateConfirmSignupPassword(e.target.value))
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    //make request to signup path on server
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username:
          <input name="username" type="text" value={username} onChange={(e) => handleChange(e)}></input>
        </label>
        <label>Password:
          <input name="password" type="password" value={password} onChange={(e) => handleChange(e)}></input>
        </label>
        <label>Confirm Password:
          <input name="confirmPassword" type="password" value={confirmPassword} onChange={(e) => handleChange(e)}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignupForm