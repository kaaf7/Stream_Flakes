import { LOGIN_PATH, MAIN_PATH, MEDIAS_PATH } from "@/constants/constants"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

import { lazy } from "react"
import { MainLayout } from "../ui/main-layout"

const MediasOverview = lazy(() => import("@/pages/medias/MediasOverview"))
const Home = lazy(() => import("@/pages/home/Home"))

const protectedRoutes = [
  {
    path: MAIN_PATH,
    element: <Home />
  }
]

const routes = (isLoggedIn: boolean) => [
  {
    path: LOGIN_PATH,
    element: <></>
  },
  {
    path: MEDIAS_PATH,
    element: <MediasOverview />
  },
  {
    path: "*",
    element: <Navigate to={MAIN_PATH} />
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
  const router = createBrowserRouter(routes(true))
  return <RouterProvider router={router} />
}
