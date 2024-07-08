import { LOGIN_PATH, MAIN_PATH, MEDIAS_PATH, SIGN_UP_PATH } from "@/constants/constants"
import { Suspense, lazy } from "react"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

import { MainLayout } from "../ui/main-layout"

const MediasOverview = lazy(() => import("@/pages/medias/MediasOverview"))

const Login = lazy(() => import("@/pages/login/Login"))

const SignUp = lazy(() => import("@/pages/sign-up/SignUp"))

const Home = lazy(() => import("@/pages/home/Home"))

const protectedRoutes = [
  {
    path: MAIN_PATH,
    element: <Home />
  },
  {
    path: SIGN_UP_PATH,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    )
  }
]

const routes = (isLoggedIn: boolean) => [
  {
    path: SIGN_UP_PATH,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    )
  },
  {
    path: LOGIN_PATH,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    )
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
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout isLoggedIn={isLoggedIn} />
      </Suspense>
    ),
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
