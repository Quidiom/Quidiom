import React from "react";
import { Link } from "react-router-dom";

function Login(): React.JSX.Element {
  return (
    <div>
      <Link to='/login'>
        Login
      </Link>
    </div>
  )
}

export default Login