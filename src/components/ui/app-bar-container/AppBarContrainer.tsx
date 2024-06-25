import { AppBar, AppBarProps, Toolbar } from "@mui/material"

import { ReactNode } from "react"

interface AppBarPropsContainerProps extends AppBarProps {
  children: ReactNode
}

export const AppBarContainer = ({ children, ...props }: AppBarPropsContainerProps) => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 }} {...props}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>{children}</Toolbar>
    </AppBar>
  )
}
