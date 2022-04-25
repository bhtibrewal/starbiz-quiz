import "./result_page.css";
import trophy from "../../assets/images/trophy.svg";
import { FaStar, FaCheck, IoCloseOutline } from "../../assets/icons";
import { QuestionCard } from "../../components";
import { useQuiz } from "../../contexts";
import { useEffect, useState } from "react";

export const ResultPage = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const calculateScore = () => correctAnswers*100;
  const { quiz } = useQuiz();

  useEffect(() => {
    quiz?.questions.forEach(({ choice, answer }) => {
      console.log(choice, answer);
      if (choice)
        choice === answer
          ? setCorrectAnswers((prev) => prev + 1)
          : setWrongAnswers((prev) => prev + 1);
    });
  }, []);
  return (
    <main className="quiz-main">
      <section className="section result-sec flex-col">
        <div className="trophy-img">
          <img src={trophy} alt="trophy" />
        </div>
        <p className="body-l">Well Played!!</p>
      </section>

      {/* <!--Score Card  --> */}
      <section className="container score-card flex-col">
        <p className="body-l secondary-color-text">
          <span className="m-r primary">
            <FaStar />
          </span>
          <b>Score</b>
        </p>
        <h2 className="primary-text">{calculateScore()}pts</h2>
        <div className="flex-align-center score-sec">
          <div className="flex-col score-col secondary-color-text">
            <span>Total</span>
            <p>
              <b>{quiz?.questions?.length}</b>
            </p>
          </div>
          <div className="flex-col score-col">
            <span>
              <FaCheck /> Right
            </span>
            <p>
              <b>{correctAnswers}</b>
            </p>
          </div>
          <div className="flex-col score-col">
            <span>
              <IoCloseOutline />
              Wrong
            </span>
            <p>
              <b>{wrongAnswers}</b>
            </p>
          </div>
        </div>
        <div className="score_card-buttons">
          <button className="btn btn-primary">Take another quiz</button>
          <button className="btn outline-btn-secondary">Home</button>
        </div>
      </section>

      <section className="section flex-col result_ans-sec">
        {quiz?.questions.map((content, index) => {
          return (
            <QuestionCard
              key={content._id}
              quesNum={index + 1}
              content={content}
              showResult
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
            />
          );
        })}
      </section>
    </main>
  );
};
