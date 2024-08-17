import { Navigate, Outlet } from "react-router-dom"

import { Footer } from "@/components/ui/main-layout-footer"
import { NavBar } from "@/components/ui/nav-bar"
import { LOGIN_PATH } from "@/constants/constants"
import { BaseContainer } from "../base-container"

interface MainLayoutProps {
  isLoggedIn: boolean
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  return isLoggedIn ? (
    <BaseContainer>
      <NavBar isLoggedIn />
      <Outlet />
      <Footer />
    </BaseContainer>
  ) : (
    <Navigate to={LOGIN_PATH} />
  )
}

