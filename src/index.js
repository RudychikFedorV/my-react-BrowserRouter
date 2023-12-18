import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./peges/scss/_mixins.scss";
import "./peges/scss/_vars.scss";
import "./peges/scss/_reset.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
