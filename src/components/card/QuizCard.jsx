import { useNavigate } from "react-router-dom";
import { HiArrowNarrowRight } from "../../assets/icons.js";

export const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();
  const { _id, title, image_src, questions } = quiz;

  const clickTakeQuizHandler = () => {
    navigate(`/quiz/rules`, { state: { title } });
  };
  return (
    <div className="card w-30 basic">
      <div className="content">
        <img className="card-img" src={image_src} alt=" the office " />

        <div className="card-header">
          <p className="body-l">{title}</p>

          <div className="card-body">
            <p>Take this quiz to test yourself</p>
            <div className="flex-align-center">
              <p>{questions.length} Questions</p>
              <div
                onClick={() => clickTakeQuizHandler()}
                className="take-quiz-btn link-text-primary "
              >
                <p className="flex-align-center">
                  Take Quiz <HiArrowNarrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
