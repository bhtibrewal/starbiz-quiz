import { Link } from "react-router-dom";
import { FaCloudMoon, FaUser } from "../../assets/icons";

export const Header = () => {
  return (
    <header className="quiz-header flex-align-center">
      <Link to="/">
        <h2 className="logo">StarBiz</h2>
      </Link>

      <div className="right-side flex-align-center">
        <Link to="/sign-in">
          <FaUser />
        </Link>
        <span>
          <FaCloudMoon />
        </span>
      </div>
    </header>
  );
};
