import {
  LOGIN_PATH,
  MainColor,
  SIGN_UP_PATH,
  ToolTipPlacement,
  createFavoriteShowsPath,
  createUserAccountPath
} from "@/constants/constants"
import {
  FavoriteBorder,
  LocalMoviesOutlined,
  Logout,
  SportsSoccerOutlined
} from "@mui/icons-material"
import { Box, ContainerProps } from "@mui/material"

import { CustomButton } from "@/components/buttons/custom-button"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

type Item = {
  title?: string
  variant?: "text" | "outlined" | "contained"
  size?: "small" | "medium" | "large"
  to?: string
  isProtected?: boolean
  component?: ReactNode
}

interface RightNavBarItemsProps extends ContainerProps {
  isLoggedIn: boolean
}

export const RightNavBarItems = ({ isLoggedIn }: RightNavBarItemsProps) => {
  const { t } = useTranslation(["common"])
  const navigate = useNavigate()
  // TODO add uderId later
  const userId = "userId"
  const RIGHT_SIDE_ITEMS: Item[] = [
    {
      isProtected: false,
      component: (
        <CustomIconButton toolTipProps={{ title: t("shows"), placement: ToolTipPlacement.BOTTOM }}>
          <LocalMoviesOutlined color={MainColor.PRIMARY} />
        </CustomIconButton>
      )
    },
    {
      isProtected: false,
      component: (
        <CustomIconButton toolTipProps={{ title: t("sports"), placement: ToolTipPlacement.BOTTOM }}>
          <SportsSoccerOutlined color={MainColor.PRIMARY} />
        </CustomIconButton>
      )
    }
  ]

  const USER_RIGHT_SIDE_ITEMS: Item[] = [
    {
      isProtected: true,
      component: (
        <CustomButton
          title={"signup"}
          sx={{ height: "2rem" }}
          variant={"outlined"}
          size={"small"}
          to={SIGN_UP_PATH}
        />
      )
    },
    {
      isProtected: true,
      component: (
        <CustomButton
          title={t("login")}
          sx={{ height: "2rem" }}
          variant={"outlined"}
          size={"small"}
          to={LOGIN_PATH}>
          {t("login")}
        </CustomButton>
      )
    },
    {
      isProtected: false,
      component: (
        <CustomIconButton
          toolTipProps={{ title: t("favorites"), placement: ToolTipPlacement.BOTTOM }}
          onClick={() => navigate(createFavoriteShowsPath(userId))}>
          <FavoriteBorder color={MainColor.PRIMARY} />
        </CustomIconButton>
      )
    },
    {
      isProtected: false,
      component: (
        <CustomIconButton
          toolTipProps={{ title: t("account"), placement: ToolTipPlacement.BOTTOM }}
          onClick={() => navigate(createUserAccountPath(userId))}>
          <AccountCircle color={MainColor.PRIMARY} />
        </CustomIconButton>
      )
    },
    {
      isProtected: false,
      component: (
        <CustomIconButton toolTipProps={{ title: t("logout"), placement: ToolTipPlacement.BOTTOM }}>
          <Logout color={MainColor.PRIMARY} />
        </CustomIconButton>
      )
    }
  ]

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
      {RIGHT_SIDE_ITEMS.map((item, index) => (
        <div key={index}>{item.component}</div>
      ))}
      {USER_RIGHT_SIDE_ITEMS.filter((item) => item.isProtected !== isLoggedIn).map(
        (item, index) => (
          <div key={index}>{item.component}</div>
        ))}
    </Box>
  )
}
