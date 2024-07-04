import { AppBar, AppBarProps, Toolbar, useTheme } from "@mui/material"
import { useEffect, useState } from "react"

export const AppBarContainer = ({ children }: AppBarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AppBar
      sx={{
        display: "flex",
        direction: "column",
        alignContent: "center",
        alignItems: "center",
        position: "fixed",
        boxShadow: 0,
        width: "100%",
        height: 70,
        backgroundColor: scrolled ? theme.palette.background.default : "transparent",
        transition: "background-color 0.1s ease-in-out"
      }}>
      <Toolbar
        sx={{
          width: "90%",
          display: "flex",
          direction: "column",
          position: "fixed",
          alignContent: "center",
          alignItems: "center",
          gap: 3,
          margin: 0
        }}>
        {children}
      </Toolbar>
    </AppBar>
  )
}
