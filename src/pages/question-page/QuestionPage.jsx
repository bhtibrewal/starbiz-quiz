import "./question_page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLightbulb } from "../../assets/icons";
import { getQuiz } from "../../services";
import { QuesNav, QuesFooter } from "./components";

export const QuestionPage = () => {
  const { quizTitle } = useParams();
  const [timer, setTimer] = useState(30);
  const [quesNum, setQuesNum] = useState(1);
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    getQuiz({ setQuiz, quizTitle });
  }, []);

  const totalQues = quiz?.questions?.length || 0;
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  if (!quiz.questions) return <div>Loading...</div>;

  return (
    <main className="quiz-main">
      <QuesNav quesNum={quesNum} timer={timer} totalQues={totalQues} />

      <section className="section">
        <div className="question-sec flex-col">
          <div className="flex-align-center ques-head">
            <p className="body-l">
              <strong>Question {quesNum}:</strong>
            </p>
            <button className="btn hint-btn">
              <FaLightbulb />
            </button>
            <div className="hint-box">{quiz.questions[quesNum - 1].hint}</div>
          </div>

          <p className="body-l">{quiz?.questions[quesNum - 1].question}</p>
          <div className="options">
            {quiz?.questions[quesNum - 1].options.map((option, index) => {
              return (
                <button key={index + 1} className="btn btn-secondary">
                  {String.fromCharCode(index + 65)}: {option}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <QuesFooter
        quesNum={quesNum}
        setQuesNum={setQuesNum}
        totalQues={totalQues}
      />
    </main>
  );
};
