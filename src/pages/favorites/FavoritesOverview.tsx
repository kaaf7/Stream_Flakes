import { Box, Typography } from "@mui/material"

import { CustomButton } from "@/components/buttons/custom-button"
import { MainColor } from "@/constants/constants"
import { FavoriteShowsApiConnector } from "@/features/favorite-shows"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const FavoritesOverviewMainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  justifyItems: "center",
  marginTop: "5rem",
  gap: 2
}

const FavoritesOverviewTypographyStyle = {
  textAlign: "left",
  flex: 2,
  position: "relative",
  zIndex: 2,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical"
}

export default function FavoritesOverview() {
  const { t } = useTranslation(["common"])
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <Box sx={FavoritesOverviewMainStyle}>
      <FavoriteShowsApiConnector>
        <Box
          sx={{
            width: "100%",
            height: expand ? "20rem" : "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            alignItems: "center",
            gap: 2,
            position: "relative"
          }}>
          <Typography
            sx={FavoritesOverviewTypographyStyle}
            variant="body1"
            color={MainColor.PRIMARY}>
            {t("dummyText")}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start"
            }}>
            <CustomButton
              size={"small"}
              variant={"outlined"}
              onClick={() => setExpand((expand) => !expand)}>
              {expand ? t("hide") : t("explore")}
            </CustomButton>
          </Box>
        </Box>
      </FavoriteShowsApiConnector>
    </Box>
  )
}
