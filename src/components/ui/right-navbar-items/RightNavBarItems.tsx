import { LOGIN_PATH, SHOWS_PATH, SIGN_UP_PATH, SPORTS_PATH } from "@/constants/constants"
import { Box, ContainerProps } from "@mui/material"

import { CustomButton } from "@/components/buttons/custom-button"

type Item = {
  title: string
  variant: "text" | "outlined" | "contained"
  size: "small" | "medium" | "large"
  to: string
}

const RIGHT_SIDE_ITEMS: Item[] = [
  { title: "Signup", variant: "outlined", size: "small", to: SIGN_UP_PATH },
  { title: "Login", variant: "text", size: "small", to: LOGIN_PATH },
  { title: "Shows", variant: "text", size: "small", to: SHOWS_PATH },
  { title: "Sports", variant: "text", size: "small", to: SPORTS_PATH }
]

interface RightNavBarItemsProps extends ContainerProps {
  isLoggedIn: boolean
}

export const RightNavBarItems = ({ isLoggedIn }: RightNavBarItemsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        gap: 2
      }}>
      {RIGHT_SIDE_ITEMS.map((item) => (
        <CustomButton sx={{ height: "2rem" }} variant={item.variant} size={item.size} to={item.to}>
          {item.title}
        </CustomButton>
      ))}
    </Box>
  )
}
