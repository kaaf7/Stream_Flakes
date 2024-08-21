import { Badge, Box, ContainerProps } from "@mui/material"
import { FavoriteBorder, Logout } from "@mui/icons-material"
import {
  LOGIN_PATH,
  MainColor,
  SIGN_UP_PATH,
  ToolTipPlacement,
  createFavoriteShowsPath,
  createUserAccountPath
} from "@/constants/constants"

import AccountCircle from "@mui/icons-material/AccountCircle"
import { CustomButton } from "@/components/buttons/custom-button"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { ReactNode } from "react"
import { ShowsButtonWithDialogContainer } from "@/features/medias-display-dialog"
import { WithNavBarItems } from "../nav-bar/WithNavBarItems"
import { useAuth } from "@/hooks/auth/useAuth"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

type Item = {
  title?: string
  variant?: "text" | "outlined" | "contained"
  size?: "small" | "medium" | "large"
  to?: string
  component?: ReactNode
}

interface RightNavBarItemsProps extends ContainerProps {
  isLoggedIn: boolean
}


export const RightNavBarItems = ({ isLoggedIn }: RightNavBarItemsProps) => {
  const { t } = useTranslation(["common"])
  const { user ,logout} = useAuth()
  const navigate = useNavigate()
  const Navbaritems = WithNavBarItems()

  const PUBLIC_NAVBAR_ITEMS: Item[] = [
    {
      component: <ShowsButtonWithDialogContainer />
    },
    {
      component: (
        <CustomButton
          title={"signUp"}
          sx={{ height: "2rem" }}
          variant={"outlined"}
          size={"small"}
          to={SIGN_UP_PATH}>
          {t("signUp")}
        </CustomButton>
      )
    },
    {
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
    }
  ]

  const PROTECTED_NAVBAR_ITEMS: Item[] = [
    {
      component: <ShowsButtonWithDialogContainer />
    },
    {
      component: (
        <CustomIconButton
          toolTipProps={{ title: t("favorites"), placement: ToolTipPlacement.BOTTOM }}
          onClick={() => navigate(createFavoriteShowsPath(user?.id as string))}>
          <Badge badgeContent={user?.favorites?.length ?? 0} color={MainColor.WARNING}>
            <FavoriteBorder color={MainColor.PRIMARY} />
          </Badge>
        </CustomIconButton>
      )
    },
    {
      component: (
        <CustomIconButton
          toolTipProps={{ title: t("account"), placement: ToolTipPlacement.BOTTOM }}
          onClick={() => navigate(createUserAccountPath(user?.id as string))}>
          <AccountCircle color={MainColor.PRIMARY} />
        </CustomIconButton>
      )
    },
    {
      component: (
        <CustomIconButton
          onClick={()=>{logout()} }
          toolTipProps={{ title: t("logout"), placement: ToolTipPlacement.BOTTOM }}>
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
      {isLoggedIn ? (
        <Navbaritems items={PROTECTED_NAVBAR_ITEMS} />
      ) : (
        <Navbaritems items={PUBLIC_NAVBAR_ITEMS} />
      )}
    </Box>
  )
}
