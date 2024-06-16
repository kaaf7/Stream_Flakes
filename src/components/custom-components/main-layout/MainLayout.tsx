import { LOGIN_PATH } from "@/constants/constants"
import { Navigate, Outlet } from "react-router-dom"

interface MainLayoutProps {
  isLoggedIn: boolean
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN_PATH} />
}
