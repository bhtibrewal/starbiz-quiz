import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "../../assets/icons.js";

export const CategoryCard = () => {
  return (
    <div className="card w-30 basic">
      <div className="content">
        <img
          className="card-img"
          src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(83)(90).jpg"
          alt=" the office "
        />

        <div className="card-header">
          <p className="body-l">The Office Quiz for true fans</p>

          <div className="card-body">
            <p>Take this quiz to test yourself</p>
            <div className="flex-align-center">
              <p>20 Questions</p>
              <Link to="" className=" take-quiz-btn link-text-primary ">
                <p className="flex-align-center">Take Quiz <HiArrowNarrowRight /></p>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
