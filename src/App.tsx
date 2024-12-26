import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import ContacForm from "./components/ContactForm";
import Resources from "./components/Resources";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
        </Routes>
        <ContacForm />
      </BrowserRouter>
    </>
  );
}

export default App;
