import "./question_page.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  postResponse } from "../../services";
import { Loader, QuestionCard } from "../../components";
import { QuesNav, QuesFooter } from "./components";
import { useAuth, useQuiz, useToast } from "../../contexts";

export const QuestionPage = () => {
  const { quizTitle } = useParams();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(180);
  const {
    userData: { quizzesAttempted },
    userDataDispatch,
  } = useAuth();
  const [quesNum, setQuesNum] = useState(1);
  const { showToast } = useToast();
  const { quiz, setQuiz } = useQuiz();

  useEffect(() => {
    const foundQuiz = quizzesAttempted?.find(
      (quiz) => quiz.title === quizTitle
    );
    if (foundQuiz) {
      setQuiz(foundQuiz);
    }
  }, [quizzesAttempted]);

  const totalQues = quiz?.questions?.length || 0;

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      showToast({ title: "times up", type: "error" });
      navigate("/result");
    }
    return () => clearInterval(interval);
  }, [timer]);

  const selectOptionHandler = (option, questionId) => {
    postResponse({
      quizId: quiz._id,
      questionId,
      userDataDispatch,
      option,
      showToast,
    });
  };

  if (!quiz.questions) return <Loader />;

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
