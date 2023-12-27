import React, { useState } from "react";

const Password = ({type, label, placeholder}) => {
  const [password, setPassword] = useState("");

  const [passwordShow, setPasswordShow] = useState(false);
  const changePasswordShow = () => {
    setPasswordShow((e) => !e);
  };
  return (
    <div className="Access-input__password">
      <div className="Access-input__registration">
        <label for="name">Password:</label>
      </div>
      <div className="Access-input__input">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordShow ? "email" : "password"}
          name="userpass"
          placeholder="Userpass"
        />
        <span className="material-icons" onClick={changePasswordShow}>
          visibility_off
        </span>
      </div>
    </div>
  );
};

export default Password;
