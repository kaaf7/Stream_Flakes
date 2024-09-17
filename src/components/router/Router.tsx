import {
  FAVORITES_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  MEDIA_PATH,
  SHOWS_PATH,
  SIGN_UP_PATH
} from "@/constants/constants"
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"
import { LinearProgress } from "@mui/material"
import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import { MainLayout } from "../ui/main-layout"

const MediasOverview = lazy(() => import("@/pages/medias/MediasOverview"))

const Login = lazy(() => import("@/pages/login/Login"))

const SignUp = lazy(() => import("@/pages/sign-up/SignUp"))

const Home = lazy(() => import("@/pages/home/Home"))

const FavoritesMediasOverview = lazy(() => import("@/pages/favorites/FavoritesMediasOverview"))

const MediaDetailView = lazy(() => import("@/pages/media-view/MediaView"))

export const PageSuspense = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        justifyItems: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
      <div style={{ width: "100%" }}>
        <LinearProgress
          sx={{
            width: "100%",
            height: "2px"
          }}
        />
      </div>
    </div>
  )
}

export const ErrorFallBack = () => {
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
      }}>
      <SentimentDissatisfiedIcon
        color={"disabled"}
        sx={{ width: "5rem", height: "5rem" }}
        fontSize={"large"}
      />
    </div>
  )
}

const protectedRoutes = [
  {
    path: MAIN_PATH,
    element: <Home />
  },
  {
    path: SHOWS_PATH,
    element: <MediasOverview />
  },
  {
    path: MEDIA_PATH,
    element: <MediaDetailView />
  },
  {
    path: FAVORITES_PATH,
    element: <FavoritesMediasOverview />
  }
]

const publicRoutes = [
  {
    path: MAIN_PATH,
    element: <Home />
  },
  {
    path: SHOWS_PATH,
    element: <MediasOverview />
  },
  {
    path: LOGIN_PATH,
    element: <Login />
  },
  {
    path: MEDIA_PATH,
    element: <MediaDetailView />
  },
  {
    path: SIGN_UP_PATH,
    element: <SignUp />
  }
]

const routes = (isLoggedIn: boolean) => [
  {
    path: "*",
    element: <Navigate to={MAIN_PATH} />
  },
  {
    path: MAIN_PATH,
    element: <MainLayout isLoggedIn={isLoggedIn} />,
    children: isLoggedIn ? protectedRoutes : publicRoutes
  }
]

interface RouterProps {
  isLoggedIn: boolean
}

export const Router = ({ isLoggedIn }: RouterProps) => {
  const router = createBrowserRouter(routes(isLoggedIn))

  return (
    <ErrorBoundary fallback={<ErrorFallBack />}>
      <Suspense fallback={<PageSuspense />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}
