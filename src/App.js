import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
