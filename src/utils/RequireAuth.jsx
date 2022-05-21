import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

export const RequireAuth = () => {
  const { isUserLoggedIn } = useAuth();
  const location = useLocation();
  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};
