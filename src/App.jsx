import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, QuestionPage } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="quiz-body">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quizTitle" element={<QuestionPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
