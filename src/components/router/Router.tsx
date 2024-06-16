import { LOGIN_PATH, MAIN_PATH } from "@/constants/constants";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/routes/LoggedInMainLayout";

const routes = (isLoggedIn: boolean) => [
  {
    path: "*",
    element: <></>,
  },
  {
    path: MAIN_PATH,
    element: <ProtectedRoute isLoggedIn={isLoggedIn} />,
    children: [
      {
        path: "",
        element: <></>,
      },
    ],
  },
  {
    path: LOGIN_PATH,
    element: <></>,
  },
];
interface RouterProps {
  isLoggedIn: boolean;
}
export const Router = ({ isLoggedIn }: RouterProps) => {
  const loggedInRoutes = createBrowserRouter(routes(isLoggedIn));

  return <RouterProvider router={loggedInRoutes} />;
};
