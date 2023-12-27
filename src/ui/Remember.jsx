import React from 'react'
import { Link } from "react-router-dom";

const Remember = () => {
  return (
    <div className="Access-input__remember">
        <label className="Access-input__chk">
          <input
            className="Access-input__inp"
            type="checkbox"
            name="remember"
            value="yes"
          />
          <span className="Access-input__check"></span>
          <span className="Access-input__rememberMe">Remember me</span>
        </label>
        <div className="Access-input__forgotPassword">
          <Link to={"/access"}>Forgot Password?</Link>
        </div>
      </div>
  )
}

export default Remember
