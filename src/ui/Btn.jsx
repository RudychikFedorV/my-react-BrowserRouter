import React from "react";
import { Link } from "react-router-dom";


const Btn = ({text, ...props}) => {
  return (
    <Link to={"/access"} {...props}>{text}</Link>
  );
};

export default Btn;
