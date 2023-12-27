import React, { useState } from "react";


const Email = ({type, label, placeholder}) => {
    const [email, setEmail] = useState("");
  return (
    <div className="Access-input__emil">
      <div className="Access-input__registration">
        <label for="email">{label}</label>
      </div>
      <div className="Access-input__input">
        <input
          type={type}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
        />
        <span class="material-icons" onClick={() => setEmail("")}>
          highlight_off
        </span>
      </div>
    </div>
  );
};

export default Email;
