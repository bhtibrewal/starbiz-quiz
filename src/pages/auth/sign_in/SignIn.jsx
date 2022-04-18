import "../auth.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, useToast } from "../../../contexts";
import { useDocumentTitle } from "../../../custom_hooks";
import {
  InputField,
  Button,
  PasswordInput,
} from "../../../components";
import { signIn } from "../../../services";

export const SignIn = () => {
  useDocumentTitle("| Sign In");
  const navigate = useNavigate();
  const [error, setSigninError] = useState();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const guestLogin = {
    email: "guest@gmail.com",
    password: "guest@123",
  };
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);

  const { setIsUserLoggedIn, userDataDispatch } = useAuth();
  const { showToast } = useToast();
  useEffect(() => {
    showToast({
      title: "Click on Keep me Logged in before submitting to stay logged in",
      type: "primary",
    });
    return () => {};
  }, []);
  const submitHandler=(e) => {
    e.preventDefault();
    signIn({
      setSigninError,
      data: inputValues,
      userDataDispatch,
      setIsUserLoggedIn,
      showToast,
      keepMeLoggedIn,
    });
  }

  return (
    <main className="quiz-main center">
      <form
        className="flex-col signup-sec"
        onSubmit={submitHandler}
      >
        <p className="body-l">Login to my user account.</p>

        <InputField
          value={inputValues.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          label={"Email"}
        />
        <PasswordInput
          value={inputValues.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          label={"Password"}
        />
        <label className="flex-align-center">
          <input
            type="checkbox"
            checked={keepMeLoggedIn}
            onChange={() => setKeepMeLoggedIn((prev) => !prev)}
          />
          <span className="checkbox-text"> Keep me logged in. </span>
        </label>
        <Button className='btn-primary' type="submit">
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </Button>
        <Button className='outline-btn-primary' onClick={() => setInputValues(guestLogin)}>
          Login as Guest
        </Button>
        <p
          onClick={() =>
            showToast({
              title: "Coming Soon",
              type: "primary",
            })
          }
          className="link-text-primary"
        >
          Forgot your password?
        </p>
        <div>
          <p className="body-md">Still don't have an account ?</p>
          <div
            className="link-text-primary"
            onClick={() => navigate("/sign-up")}
          >
            SIGN UP
          </div>
        </div>
        <div className="err-msg">{error}</div>
      </form>
    </main>
  );
};
