import { useWindowScroll } from "@/hooks/window-scroll/useWindowScroll"
import { AppBar, AppBarProps, Toolbar, useTheme } from "@mui/material"
import { useMemo } from "react"

export const AppBarContainer = ({ children }: AppBarProps) => {
  const theme = useTheme()

  const { scrolled } = useWindowScroll()

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
      width: "80%",
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
