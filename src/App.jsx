import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  QuestionPage,
  ResultPage,
  RulesPage,
  SignIn,
  SignUp,
} from "./pages";

import { Footer, Header } from "./components";
import { Toast } from "./components/toast/Toast";

function App() {
  return (
    <div className="quiz-body">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quizTitle" element={<QuestionPage />} />
        <Route path="/quiz/rules" element={<RulesPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
      <Toast position="top-right" />
    </div>
  );
}

export default App;
