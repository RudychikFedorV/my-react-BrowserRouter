import React from "react";
import Headers from "../components/Headers";
import Form from "../components/Form";
import Footer from "../components/Footer";
import AccessImg from "../components/AccessImg";


const Access = () => {
  return (
    <div className="Access">
      <div className="Access__page">
        <Headers/>
        <Form/>
        <Footer/>
      </div>
      <AccessImg/>
    </div>
  );
};

export default Access;
