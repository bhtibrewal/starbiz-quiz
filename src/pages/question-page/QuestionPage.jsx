import "./question_page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuiz, postResponse } from "../../services";
import { QuestionCard } from "../../components";
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

  const selectOptionHandler = (option, questionId) => {
    postResponse({
      quizId: quiz._id,
      questionId,
      option,
    });
  };

  if (!quiz.questions) return <div>Loading...</div>;

  return (
    <main className="quiz-main">
      <QuesNav quesNum={quesNum} timer={timer} totalQues={totalQues} />

      <section className="section">
        <QuestionCard
          quesNum={quesNum}
          content={quiz?.questions[quesNum - 1]}
          selectOptionHandler={selectOptionHandler}
        />
      </section>
      <QuesFooter
        quesNum={quesNum}
        setQuesNum={setQuesNum}
        totalQues={totalQues}
      />
    </main>
  );
};
