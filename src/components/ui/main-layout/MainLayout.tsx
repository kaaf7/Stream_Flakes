import { Navigate, Outlet } from "react-router-dom"

import { NavBar } from "@/components/ui/nav-bar"
import { LOGIN_PATH } from "@/constants/constants"

interface MainLayoutProps {
  isLoggedIn: boolean
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  return isLoggedIn ? (
    <>
      <NavBar isLoggedIn />
      <Outlet />
    </>
  ) : (
    <Navigate to={LOGIN_PATH} />
  )
}

