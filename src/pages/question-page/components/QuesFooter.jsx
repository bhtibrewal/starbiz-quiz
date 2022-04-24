import { useNavigate } from "react-router-dom";
import { HiArrowNarrowRight } from "../../../assets/icons";

export const QuesFooter = ({ quesNum, setQuesNum, totalQues }) => {
  const navigate = useNavigate();
  const questionNavigationHandler = (direction) => {
    if (direction === "next") {
      if (quesNum === totalQues) navigate("/result");
      else setQuesNum((prev) => prev + 1);
    } else {
      if (quesNum > 1) setQuesNum((prev) => prev - 1);
    }
  };
  return (
    <section className="section">
      <div className="container flex-align-center ques-nav">
        <p
          className="body-l link-text-primary"
          onClick={() => questionNavigationHandler("prev")}
        >
          Prev Question
        </p>

        <p
          onClick={() => questionNavigationHandler("next")}
          className="body-l link-text-primary flex-align-center"
        >
          Next Question
          <HiArrowNarrowRight />
        </p>
      </div>
    </section>
  );
};
