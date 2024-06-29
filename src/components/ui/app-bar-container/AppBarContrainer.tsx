import { AppBar, AppBarProps, Toolbar } from "@mui/material"

export const AppBarContainer = ({ children }: AppBarProps) => {
  return (
    <AppBar
      sx={{
        display: "flex",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "fixed",
        boxShadow: 0,
        background:"inhit",
        width:"100%"
      }}>
      <Toolbar sx={{ width: "1400px", display: "flex", justifyContent: "center" }}>
        {children}
      </Toolbar>  
    </AppBar>
  )
}
