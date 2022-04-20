import "./result_page.css";
import trophy from "../../assets/images/trophy.svg";
import { FaStar, FaCheck, IoCloseOutline } from "../../assets/icons";

export const ResultPage = () => {
  const calcScore = () => {};
  return (
    <main className="quiz-main">
      <section className="section result-sec flex-col">
        <div className="trophy-img">
          <img src={trophy} />
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
        <h2 className="primary-text">300pts</h2>
        <div className="flex-align-center score-sec">
          <div className="flex-col score-col secondary-color-text">
            <span>Total</span>
            <p>
              <b>20</b>
            </p>
          </div>
          <div className="flex-col score-col">
            <span>
              <FaCheck /> Right
            </span>
            <p>
              <b>15</b>
            </p>
          </div>
          <div className="flex-col score-col">
            <span>
              <IoCloseOutline />
              Wrong
            </span>
            <p>
              <b>5</b>
            </p>
          </div>
        </div>
        <div className="score_card-buttons">
          <button className="btn btn-primary">Take another quiz</button>
          <button className="btn outline-btn-secondary">Home</button>
        </div>
      </section>

      <section className="section flex-col result_ans-sec">
        <div className="question-sec flex-col">
          <p className="body-l">
            <strong>Question 1:</strong>
          </p>
          <p className="body-l">
            In The Force Awakens, which character has Darth Vader’s damaged
            mask?
          </p>
          <div className="options">
            <button className="btn btn-secondary right-op">A: Option 1</button>

            <button className="btn btn-secondary wrong-op">B: Option 2</button>

            <button className="btn btn-secondary">C: Option 3</button>

            <button className="btn btn-secondary">D: Option 4</button>
          </div>
        </div>
        <div className="question-sec flex-col">
          <p className="body-l">
            <strong>Question 2:</strong>
          </p>
          <p className="body-l">
            In The Force Awakens, which character has Darth Vader’s damaged
            mask?
          </p>
          <div className="options">
            <button className="btn btn-secondary">A: Option 1</button>

            <button className="btn btn-secondary">B: Option 2</button>

            <button className="btn btn-secondary right-op">C: Option 3</button>

            <button className="btn btn-secondary">D: Option 4</button>
          </div>
        </div>
      </section>
    </main>
  );
};
