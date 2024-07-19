import { LOGIN_PATH, MAIN_PATH, SHOWS_PATH, SIGN_UP_PATH } from "@/constants/constants"
import { Suspense, lazy } from "react"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

import { MainLayout } from "../ui/main-layout"

const ShowsOverview = lazy(() => import("@/pages/shows/ShowsOverview"))

const Login = lazy(() => import("@/pages/login/Login"))

const SignUp = lazy(() => import("@/pages/sign-up/SignUp"))

const Home = lazy(() => import("@/pages/home/Home"))

export const PageSuspense = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        textAlign: "center"
      }}></div>
  )
}

const protectedRoutes = [
  {
    path: MAIN_PATH,
    element: <Home />
  },
  {
    path: SHOWS_PATH,
    element: (
      <Suspense fallback={<PageSuspense />}>
        <ShowsOverview />
      </Suspense>
    )
  }
]

const routes = (isLoggedIn: boolean) => [
  {
    path: SIGN_UP_PATH,
    element: (
      <Suspense fallback={<PageSuspense />}>
        <SignUp />
      </Suspense>
    )
  },
  {
    path: LOGIN_PATH,
    element: (
      <Suspense fallback={<PageSuspense />}>
        <Login />
      </Suspense>
    )
  },

  {
    path: "*",
    element: <Navigate to={MAIN_PATH} />
  },
  {
    path: MAIN_PATH,
    element: (
      <Suspense fallback={<PageSuspense />}>
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
