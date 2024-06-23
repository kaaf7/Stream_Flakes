import { LOGIN_PATH, MAIN_PATH, MEDIAS_PATH, USER_PATH } from "@/constants/constants"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

import { lazy } from "react"
import { MainLayout } from "../ui/main-layout"

const MediasOverview = lazy(() => import("../../pages/medias/MediasOverview"))

const protectedRoutes = [
  {
    path: USER_PATH,
    element: <></>
  }
]

const routes = (isLoggedIn: boolean) => [
  {
    path: "*",
    element: <Navigate to={MAIN_PATH} />,
        
  },
  {
    path: MEDIAS_PATH,
    element: <MediasOverview />
  },
  {
    path: LOGIN_PATH,
    element: <></>
  },
  {
    path: MAIN_PATH,
    element: <MainLayout isLoggedIn={isLoggedIn} />,
    children: protectedRoutes
  }
]

interface RouterProps {
  isLoggedIn: boolean
}
export const Router = ({ isLoggedIn }: RouterProps) => {
  const  router= createBrowserRouter(routes(isLoggedIn))
  return <RouterProvider router={router} />
}
