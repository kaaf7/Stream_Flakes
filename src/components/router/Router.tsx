import { LOGIN_PATH, MAIN_PATH } from "@/constants/constants"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../ui/main-layout"

const routes = (isLoggedIn: boolean) => [
  {
    path: "*",
    element: <></>
  },
  {
    path: MAIN_PATH,
    element: <MainLayout isLoggedIn={isLoggedIn} />,
    children: [
      {
        path: "",
        element: <></>
      }
    ]
  },
  {
    path: LOGIN_PATH,
    element: <></>
  }
]

interface RouterProps {
  isLoggedIn: boolean
}
export const Router = ({ isLoggedIn }: RouterProps) => {
  const loggedInRoutes = createBrowserRouter(routes(isLoggedIn))

  return <RouterProvider router={loggedInRoutes} />
}
