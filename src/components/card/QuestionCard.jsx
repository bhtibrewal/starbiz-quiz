import { FaLightbulb } from "../../assets/icons";

export const QuestionCard = ({quesNum,content, selectOptionHandler}) => {
  const { _id, question, options, answer, hint} = content;

  return (
    <div className="question-sec flex-col">
          <div className="flex-align-center ques-head">
            <p className="body-l">
              <strong>Question {quesNum}:</strong>
            </p>
            <button className="btn hint-btn">
              <FaLightbulb />
            </button>
            <div className="hint-box">{hint}</div>
          </div>

          <p className="body-l">{question}</p>
          <div className="options">
            {options.map((option, index) => {
              return (
                <button key={index + 1} onClick={()=>selectOptionHandler(option, _id)} className="btn btn-secondary">
                  {String.fromCharCode(index + 65)}: {option}
                </button>
              );
            })}
          </div>
        </div>
  )
}
