import { FaLightbulb } from "../../assets/icons";

export const QuestionCard = ({
  quesNum,
  content,
  selectOptionHandler,
  showResult = false,
}) => {
  const { _id, question, options, choice, answer, hint } = content;
  const checkCorrectOrWrongOption = (option) => {
    if (option === answer) {
      return "right";
    } else if (choice === option) {
      return "wrong";
    }
  };
  const isUserChoiceCorrect = choice == answer;
  

  return (
    <div className="question-sec flex-col">
      <div className="flex-align-center ques-head">
        <p className="body-l">
          <strong>Question {quesNum}:</strong>
        </p>
        {showResult ? (
          <span
            className={`points  ${isUserChoiceCorrect ? "correct-answer" : "wrong-answer"}`}
          >
            Points:{isUserChoiceCorrect ? 1 : 0}
          </span>
        ) : (
          <div className="hint-sec">
            <button className="btn hint-btn">
              <FaLightbulb />
            </button>
            <div className="hint-box">{hint}</div>
          </div>
        )}
      </div>

      <p className="body-l">{question}</p>
      <div className="options">
        {options.map((option, index) => {
          const result = showResult ? checkCorrectOrWrongOption(option) : "";
          return (
              <button
                key={index + 1}
                onClick={() => !showResult && selectOptionHandler(option, _id)}
                className={`btn ${
                  !showResult && choice === option ? "btn-primary" : "btn-secondary"
                } ${result + "-op"}`}
              >
                {String.fromCharCode(index + 65)}: {option}
              </button>
          );
        })}
      </div>
    </div>
  );
};
