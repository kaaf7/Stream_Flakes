import { AppBarContainer } from "@/components/ui/app-bar-container"
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
    <Typography variant="h4" sx={{ color: "orange" }}>
      StreamFlakes
    </Typography>
  )
}
