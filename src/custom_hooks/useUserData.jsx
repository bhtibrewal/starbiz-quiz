import axios from "axios";
import { useReducer, useState } from "react";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialisUserLoggedIn = encodedToken !== null ? true : false;
  axios.defaults.headers.common["authorization"] = encodedToken;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(initialisUserLoggedIn);
  const localUserData = JSON.parse(localStorage.getItem("user"));
  const initialUserData = localUserData || {};

  const userDataReducer = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN_USER":
        return {
          ...state,
          ...payload,
        };
      case "LOGOUT_USER":
        return {};

      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );
  return { isUserLoggedIn, setIsUserLoggedIn, userData, userDataDispatch };
};
