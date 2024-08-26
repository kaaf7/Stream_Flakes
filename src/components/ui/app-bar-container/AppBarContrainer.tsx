import { AppBar, AppBarProps, Toolbar, useTheme } from "@mui/material"
import { useCallback, useEffect, useMemo, useState } from "react"

import { debounce } from "lodash"

export const AppBarContainer = ({ children }: AppBarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()

  const handleScroll = useCallback(
    debounce(() => {
      setScrolled(window.scrollY > 10)
    }, 100),
    []
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const appBarStyles = useMemo(
    () => ({
      display: "flex",
      position: "fixed",
      width: "100%",
      alignItems: "center",
      backgroundColor: "transparent",
      backdropFilter: scrolled ? "blur(10px) brightness(60%)" : "none",
      transition: "background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
      boxShadow: "none",
      zIndex: 1000,
      height: "4rem"
    }),
    [scrolled, theme.palette.background.default]
  )

  const toolbarStyles = useMemo(
    () => ({
      width:"75rem",
      height: "100%",
      padding: "0 0 0 0",
      display: "flex",
      gap: 10,
      alignItems: "center",
      justifyContent: "space-between"
    }),
    []
  )

  return (
      <AppBar sx={appBarStyles}>
        <Toolbar style={toolbarStyles}>{children}</Toolbar>
      </AppBar>
  )
}
