import { AppBarContainer } from "@/components/ui/app-bar-container"
import { RightNavBarItems } from "@/components/ui/right-navbar-items"
import { SearchBar } from "@/components/ui/search-bar"
import { MAIN_PATH } from "@/constants/constants"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface NavbarProps {
  isLoggedIn: boolean
}

export const NavBar = ({ isLoggedIn }: NavbarProps) => {
  return (
    <AppBarContainer>
      <Logo />
      <SearchBar />
      <RightNavBarItems isLoggedIn={isLoggedIn} />
    </AppBarContainer>
  )
}

function Logo() {
  const { mobile } = useResponsive()
  const navigate = useNavigate()
  return (
    <Box
      onClick={() => {
        navigate(MAIN_PATH)
      }}
      sx={{ cursor: "pointer" }}>
      <Typography
        variant={mobile ? "body2" : "h5"}
        sx={{
          color: "#c70c0c",
          fontWeight: "bold"
        }}>
        |StreamFlakes.
      </Typography>
    </Box>
  )
}
