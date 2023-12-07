
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/skills/Skills";
import Works from "./Components/Works/Works";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
      </div>
  );
}

export default App;
