import { Routes, Route } from "react-router-dom";
import About from "./peges/About";
import Contacts from "./peges/Contacts";
import Header from "./peges/Header";
import Home from "./peges/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
