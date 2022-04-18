import { FaRegClock } from "../../../assets/icons";

export const QuesNav = ({ timer, quesNum, totalQues }) => {
  return (
    <section className="section">
      <div className="container flex-align-center ques-nav">
        <p>
          <i className="fa-regular fa-circle-question fa-lg"></i>
          Question:
          <b>
            {" "}
            {quesNum}/{totalQues}
          </b>
        </p>
        <p title="Timer" className={timer < 5 ? "timer-alert" : ""}>
          <FaRegClock />
          Time Left: <b>{timer}sec</b>
        </p>
      </div>
    </section>
  );
};
