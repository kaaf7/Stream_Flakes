import { AppBarContainer } from "@/components/ui/app-bar-container"
import { RightNavBarItems } from "@/components/ui/right-navbar-items"
import { SearchBar } from "@/components/ui/search-bar"
import { MAIN_PATH } from "@/constants/constants"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { Typography } from "@mui/material"
import Link from "@mui/material/Link"

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

  return (
    <Link href={MAIN_PATH} underline="none">
      <Typography
        variant={mobile ? "body2" : "h4"}
        sx={{ color: "#c70c0c", fontWeight: "bold", cursor: "pointer" }}>
        |SF._
      </Typography>
    </Link>
  )
}
