import "./App.css";
import {Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div className="quiz-body">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
