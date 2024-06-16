import { MAIN } from "@/constants/constants";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/routes/MainLayout";

const routes = (isLoggedIn: boolean) => [
  {
    path: "*",
    element: <></>,
  },
  {
    path: MAIN,
    element: <ProtectedRoute isLoggedIn={isLoggedIn} />,
    children: [
        {
          path: "",
          element: <></>,
        },
     ],
  },
];

export const Router = (isLoggedIn: boolean) => {
  const loggedInRoutes = createBrowserRouter(routes(isLoggedIn));
  <RouterProvider router={loggedInRoutes} />;
};
