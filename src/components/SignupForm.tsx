import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateConfirmSignupPassword, updateSignupPassword, updateSignupUsername } from "../reducers/signupReducer";
import { successfulLogin } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";


function SignupForm(): React.JSX.Element {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  async function handleSubmit(e: any) {
    e.preventDefault()
    //make request to signup path on server
    const URL = '/api/createUser'
    const signupBody: any = {
      username: username,
      password: password
    }
    if (password === confirmPassword) {
      try {
        const response = await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(signupBody),
          headers: {
            "Content-Type": "application/json",
          }
        })
        if (response.ok) {
          dispatch(successfulLogin(username))
        }
        navigate('/')
      }
      catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div>
      <form className="flex flex-col justify-center align-center" onSubmit={(e) => handleSubmit(e)}>
        <label>Username:
          <input className="border-black border-2 rounded-md ml-2" name="username" type="text" value={username} onChange={(e) => handleChange(e)}></input>
        </label>
        <label>Password:
          <input className="border-black border-2 rounded-md ml-2" name="password" type="password" value={password} onChange={(e) => handleChange(e)}></input>
        </label>
        <label>Confirm Password:
          <input className="border-black border-2 rounded-md ml-2" name="confirmPassword" type="password" value={confirmPassword} onChange={(e) => handleChange(e)}></input>
        </label>
        <button className="border-black border-2 rounded-md" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignupForm