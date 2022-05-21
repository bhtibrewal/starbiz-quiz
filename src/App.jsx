import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  QuestionPage,
  ResultPage,
  RulesPage,
  Quizzes,
  SignIn,
  SignUp,
  PageNotFound,
} from "pages";

import { Header, Toast } from "components";
import { useTheme } from "contexts";

function App() {
  const { darkMode } = useTheme();
  
  return (
    <div className={`quiz-body ${darkMode ? "dark-theme" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzes/:categoryName" element={<Quizzes />} />
        <Route path="/quiz/rules" element={<RulesPage />} />
        <Route path="/quiz/:quizTitle" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toast position="top-right" />
    </div>
  );
}

export default App;
