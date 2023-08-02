import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { failedLogin, successfulLogin, updateLoginPassword, updateLoginUsername } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";


function LoginForm(): React.JSX.Element {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const username: string = useSelector((state: any) => state.login.username)
  const password: string = useSelector((state: any) => state.login.password)
  const failedLogin = useSelector((state: any) => state.login.failedLogin)

  function handleChange(e: any) {
    if (e.target.name === "username") {
      dispatch(updateLoginUsername(e.target.value))
    } else if (e.target.name === "password") {
      dispatch(updateLoginPassword(e.target.value))
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    if (username && password) {
      try {
        const loginBody: any = {
          username: username,
          password: password
        }
        console.log(username, password)
        //make request to login path on server
        //store received user info in state
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify(loginBody),
          headers: {
            "Content-Type": "application/json",
          }
        })
        const data = await response.json()
        dispatch(successfulLogin(data))
        navigate('/')
      }
      catch (e) {
        dispatch(failedLogin(true))
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
          <input className="border-black border-2 rounded-md ml-3" name="password" type="password" value={password} onChange={(e) => handleChange(e)}></input>
        </label>
        <button className="border-black border-2 rounded-md mt-5 hover:bg-gray-200" type="submit">Submit</button>
      </form>
      {failedLogin &&
        <p>Your username or password is incorrect!</p>
      }
    </div>
  )
}

export default LoginForm