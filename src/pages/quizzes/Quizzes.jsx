import "pages/home_page/home_page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, QuizCard } from "components";
import { getQuizzes } from "services";

export const Quizzes = () => {
  const { categoryName } = useParams();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes({ setQuizzes });
  }, []);

  //till quizzes data load show a loader
  if (!quizzes) return <Loader />;
  return (
    <main className="main quiz-main">
      <section className="section  categories-sec">
        <h1>Quizzes</h1>
        {/* <!-- grid --> */}
        <div className="categories-grid">
          {/* <!-- card start --> */}
          {quizzes
            .filter((quiz) => quiz.categoryName === categoryName)
            .map((quiz) => {
              return <QuizCard key={quiz._id} quiz={quiz} />;
            })}
        </div>
      </section>
    </main>
  );
};
