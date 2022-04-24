import './header.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { FaCloudMoon, FaUser } from "../../assets/icons";
import { LoggedInUserAvatar } from "./components/LoggedInUserAvatar";

export const Header = () => {

  const { isUserLoggedIn } = useAuth();

  return (
    <header className="quiz-header flex-align-center">
      <Link to="/">
        <h2 className="logo">StarBiz</h2>
      </Link>

      <div className="right-side flex-align-center">
        {isUserLoggedIn ? (
          <LoggedInUserAvatar />
        ) : (
          <Link to="/sign-in">
            <FaUser />
          </Link>
        )}
        <span>
          <FaCloudMoon />
        </span>
      </div>
    </header>
  );
};
