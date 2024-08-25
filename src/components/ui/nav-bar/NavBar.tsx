import { AppBarContainer } from "@/components/ui/app-bar-container"
import Link from "@mui/material/Link"
import { MAIN_PATH } from "@/constants/constants"
import { RightNavBarItems } from "@/components/ui/right-navbar-items"
import { SearchBar } from "@/components/ui/search-bar"
import { Typography } from "@mui/material"

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
  return (
    <Link href={MAIN_PATH} underline="none">
      <Typography variant="h4" sx={{ color: "#c70c0c", fontWeight: "bold", cursor: "pointer" }}>
        StreamFlakes
      </Typography>
    </Link>
  )
}
