import { Routes, Route } from "react-router-dom";
import About from "./peges/About";
import Access from "./peges/Access";
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
        <Route path="access" element={<Access />} />
      </Routes>
    </>
  )
}

export default App;

