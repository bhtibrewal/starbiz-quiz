import "./rules_page.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useQuiz, useToast } from "../../contexts";
import { FaDice, HiArrowNarrowRight  } from "../../assets/icons";
import { getQuiz, postAttemptedQuiz } from "../../services";

export const RulesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quizTitle = location.state.title;
  const { isUserLoggedIn, userDataDispatch } = useAuth();
  const { showToast } = useToast();
  const {quiz, setQuiz} = useQuiz();

  useEffect(() => {
    getQuiz({ setQuiz, quizTitle });
  }, []);

  const playQuizClickHandler = () => {
    if (isUserLoggedIn) {
      postAttemptedQuiz({ quiz, userDataDispatch });
      navigate(`/quiz/` + quizTitle);
    } else navigate("/sign-in", { state: { from: location } });
  };
  return (
    <main className="quiz-main">
      <section className="section">
        <div className="container flex-col rules-sec">
          <h2 className="primary-text">
            <FaDice /> Game Guide
          </h2>
          <ol>
            <li>This Quiz has 20 Questions</li>
            <li>Each question has a timer of 30sec.</li>
            <li>There is only one correct answer to each question.</li>
          </ol>
          <label className="flex-align-center">
            <input type="checkbox" />
            <span className="checkbox-text">
              I agree to the rules and terms of this quiz.
            </span>
          </label>

          <button
            className="btn play-btn"
            onClick={() => playQuizClickHandler()}
          >
            <HiArrowNarrowRight />
            <span >Start Quiz</span>
          </button>
        </div>
      </section>
    </main>
  );
};
