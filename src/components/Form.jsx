import React from "react";
import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import Email from "../ui/Email";
import GoogleBtn from "../ui/GoogleBtn";
import Password from "../ui/Password";
import Remember from "../ui/Remember";

const Form = () => {
  return (
    <form className="Access-input">
      <div className="Access-input__title">NFT Access</div>
      <div className="Access-input__texts">
        Please fill your detail to access your account.
      </div>
      <Email label="Email:" placeholder="debra.holt@example.com" type="email" />
      <Password label=">Password:" placeholder="Userpass" type="password" />
      <Remember />
      <Btn className="Access-input__sing btn" text="Sign in" />
      <GoogleBtn className="Access-input__signGoogle" text="Sign in with Google" />
      <div className="Access-input__signUp">
        <Link to={"/access"}>Don’t have an account? Sign up</Link>
      </div>
    </form>
  );
};

export default Form;
