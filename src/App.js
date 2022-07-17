import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Topbar from "./components/topbar";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
