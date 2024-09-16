import { MainColor } from "@/constants/constants.ts"

import {
  ActionGenreApiConnector,
  ComedyGenreApiConnector,
  DramaGenreApiConnector,
  ExploreRandomShowsApiConnector,
  RomanceGenreApiConnector,
  TrendingShowsApiConnector
} from "@/features/home-main"

import { Box, Divider, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"

export const ShowsSection = () => {
  const { t } = useTranslation(["common"])
  const theme = useTheme()

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 30,
        alignItems: "center"
      }}>
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography color={MainColor.PRIMARY} variant={"caption"}>
          {t("DRAMA")}
        </Typography>
      </Box>
      <DramaGenreApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography color={MainColor.PRIMARY} variant={"caption"}>
          {t("ACTION")}
        </Typography>
      </Box>
      <ActionGenreApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography color={MainColor.PRIMARY} variant={"caption"}>
          {t("COMEDY")}
        </Typography>
      </Box>
      <ComedyGenreApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography color={MainColor.PRIMARY} variant={"caption"}>
          {t("EXPLORE")}
        </Typography>
      </Box>
      <TrendingShowsApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography color={MainColor.PRIMARY} variant={"caption"}>
          {t("NEW")}
        </Typography>
      </Box>
      <ExploreRandomShowsApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography color={MainColor.PRIMARY} variant={"caption"}>
          {t("DISCOVER")}
        </Typography>
      </Box>
      <RomanceGenreApiConnector />
    </main>
  )
}
