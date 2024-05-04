import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import ContacForm from "./components/ContactForm";
function App() {
  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Skills />
      <ContacForm />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
