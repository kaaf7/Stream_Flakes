import { Navigate, Outlet } from "react-router-dom"

import { LOGIN_PATH } from "@/constants/constants"

interface MainLayoutProps {
  isLoggedIn: boolean
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  if (!isLoggedIn) {
    ;<Navigate to={LOGIN_PATH} />
  }
  return <Outlet />
}
