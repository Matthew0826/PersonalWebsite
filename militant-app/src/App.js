import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./TopBar";
import AboutMe from "./AboutMe";
import Resume from "./Resume"
import './App.css'; // Import the CSS file for styling
import TestComponent from "./TestComponent";
export default function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} /> {/* Redirect root to /about */}
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/test" element={<TestComponent />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/love" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

