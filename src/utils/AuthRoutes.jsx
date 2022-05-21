import { useAuth } from "contexts";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRoutes = () => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? (
    <Navigate to={location.state.from.pathname || "/"} replace />
  ) : (
    <Outlet />
  );
};
