import { LOGIN_PATH, SHOWS_PATH, SIGN_UP_PATH, SPORTS_PATH } from "@/constants/constants"
import { Box, ContainerProps } from "@mui/material"

import { CustomButton } from "@/components/buttons/custom-button"

type Item = {
  title: string
  variant: "text" | "outlined" | "contained"
  size: "small" | "medium" | "large"
  to: string
  isProtected?: boolean
}

const RIGHT_SIDE_ITEMS: Item[] = [

  { title: "Shows", variant: "text", size: "small", to: SHOWS_PATH, isProtected: false },
  { title: "Sports", variant: "text", size: "small", to: SPORTS_PATH, isProtected: false }
]

const USER_RIGHT_SIDE_ITEMS: Item[] = [
  { title: "Signup", variant: "outlined", size: "small", to: SIGN_UP_PATH, isProtected: true },
  { title: "Login", variant: "outlined", size: "small", to: LOGIN_PATH, isProtected: true },
  { title: "Account",variant: "outlined", size: "small", to: LOGIN_PATH, isProtected: false },
  { title: "Logout", variant: "outlined", size: "small", to: LOGIN_PATH, isProtected: false },

]

interface RightNavBarItemsProps extends ContainerProps {
  isLoggedIn: boolean
}

export const RightNavBarItems = ({ isLoggedIn }: RightNavBarItemsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap:1,
        position:"relative",
        alignItems: "center",
        justifyContent: "space-between",
     
      }}>
      {RIGHT_SIDE_ITEMS.map((item) => (
        <CustomButton sx={{ height: "2rem" }} variant={item.variant} size={item.size} to={item.to}>
          {item.title}
        </CustomButton>
      ))}
     {USER_RIGHT_SIDE_ITEMS.filter((item) => item.isProtected !== isLoggedIn).map((item) => (
        <CustomButton sx={{ height: "2rem" }} variant={item.variant} size={item.size} to={item.to}>
          {item.title}
        </CustomButton>
        
      ))}
    </Box>
  )
}
