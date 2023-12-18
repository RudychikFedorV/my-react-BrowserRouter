import React from "react";
import myImage from './img/logo.svg';
import myImage1 from './img/google.svg';
import myImage2 from './img/bg.png';

const Access = () => {
  return (
    <div className="Access">
      <div className="Access__container">
        <div className="Access__page">
          <div className="Access__logo">
            <div className="Access-logo__img">
              <img src={myImage} alt="Logo" />
            </div>
            <div className="Access-logo__text">PNFT Market</div>
          </div>
          <form className="Access__input">
            <div className="Access-input__title">NFT Access</div>
            <div className="Access-input__text">
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
                <a href="/">Forgot Password?</a>
              </div>
            </div>
            <a href="/" className="Access-input__sing btn">
              Sign in
            </a>
            <a href="https://www.google.com/" class="Access-input__google btn">
              <img src={myImage1} alt="Google" />
              <p className="Access-input__signGoogle">Sign in with Google</p>
            </a>
            <div className="Access-input__signUp">
              <a href="/">Don’t have an account? Sign up</a>
            </div>
          </form>
          <div className="Access__footer">@CreatedbyNAMDesign</div>
        </div>
        <div className="Access__img">
          <img src={myImage2} alt="Foto" />
        </div>
      </div>
    </div>
  );
};

export default Access;
