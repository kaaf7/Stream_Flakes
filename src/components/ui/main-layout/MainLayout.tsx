import { Footer } from "@/components/ui/main-layout-footer"
import { NavBar } from "@/components/ui/nav-bar"
import { Outlet } from "react-router-dom"
import { BaseContainer } from "../base-container"

interface MainLayoutProps {
  isLoggedIn: boolean
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  return (
    <BaseContainer>
      <NavBar isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </BaseContainer>
  )
}
