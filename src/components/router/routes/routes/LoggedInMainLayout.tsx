import { MAIN } from "@/constants/constants";
import { Navigate, Outlet } from "react-router-dom";

interface LoggedInMainLayoutProps {
  isLoggedIn: boolean;
}

const LoggedInMainLayout = ({ isLoggedIn }: LoggedInMainLayoutProps) =>
  isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={MAIN} />
  );

export default LoggedInMainLayout;
