import { AppBar, AppBarProps, Toolbar } from "@mui/material"

export const AppBarContainer = ({ children }: AppBarProps) => {
  return (
    <AppBar
      sx={{
        display: "flex",
        direction: "column",
        alignContent: "center",
        alignItems: "center",
        position: "fixed",
        boxShadow: 0,
        width: "100%"
      }}>
      <Toolbar
        sx={{
          width: "90%",
          display: "flex",
          direction: "column",
          position: "fixed",
          alignContent:"center",
          alignItems:"center",
          gap: 1,
          margin: 0
        }}>
        {children}
      </Toolbar>
    </AppBar>
  )
}
