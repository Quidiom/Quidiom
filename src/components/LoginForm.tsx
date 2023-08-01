import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateLoginPassword, updateLoginUsername } from "../reducers/loginReducer";


function LoginForm() {
  const dispatch = useDispatch()

  const username = useSelector((state: any) => state.login.username)
  const password = useSelector((state: any) => state.login.password)

  function handleChange(e: any) {
    if (e.target.name === "username") {
      dispatch(updateLoginUsername(e.target.value))
    } else if (e.target.name === "password") {
      dispatch(updateLoginPassword(e.target.value))
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    //make request to login path on server
    //store received user info in state
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm