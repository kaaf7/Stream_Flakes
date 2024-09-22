import { Footer } from "@/components/ui/main-layout-footer"
import { NavBar } from "@/components/ui/nav-bar"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { LinearProgress, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { BaseContainer } from "../base-container"

export const Loader = () => {
  const { mobile } = useResponsive()

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
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: 10,
          flexDirection: "column"
        }}>
        <Typography
          variant={mobile ? "body2" : "h4"}
          sx={{ color: "#c70c0c", fontWeight: "bold", cursor: "pointer" }}>
          |SF.
        </Typography>
        <LinearProgress
          sx={{
            width: "10%",
            height: "2px"
          }}
        />
      </div>
    </div>
  )
}

interface MainLayoutProps {
  isLoggedIn: boolean
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  const [isLoading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <BaseContainer>
      <NavBar isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </BaseContainer>
  )
}
