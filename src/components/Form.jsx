import React from "react";
import { Link } from "react-router-dom";
import myImage1 from "../peges/img/google.svg";

const Form = () => {
  return (
    <form className="Access-input">
      <div className="Access-input__title">NFT Access</div>
      <div className="Access-input__texts">
        Please fill your detail to access your account.
      </div>
      <div className="Access-input__registration">
        <label for="email">Email:</label>
      </div>
      <div className="Access-input__input">
        <input
          type="email"
          id="mail"
          name="email__name"
          placeholder="debra.holt@example.com"
        />
        <span class="material-icons" onclick="themeToggle()">
          highlight_off
        </span>
      </div>
      <div className="Access-input__registration">
        <label for="name">Password:</label>
      </div>
      <div className="Access-input__input">
        <input type="password" name="userpass" placeholder="Userpass" />
        <span className="material-icons" onclick="themeToggle()">
          visibility_off
        </span>
      </div>
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
      <Link to={"/access"} className="Access-input__sing btn">
        Sign in
      </Link>
      <a href="https://www.google.com/" class="Access-input__google btn">
        <img src={myImage1} alt="Google" />
        <p className="Access-input__signGoogle">Sign in with Google</p>
      </a>
      <div className="Access-input__signUp">
        <Link to={"/access"}>Don’t have an account? Sign up</Link>
      </div>
    </form>
  );
};

export default Form;
