import React from "react";
import myImage1 from "../peges/img/google.svg";


const GoogleBtn = ({text, ...props}) => {
  return (
    <a href="https://www.google.com/" class="Access-input__google btn">
      <img src={myImage1} alt="Google" />
      <p {...props}>{text}</p>
    </a>
  );
};

export default GoogleBtn;
