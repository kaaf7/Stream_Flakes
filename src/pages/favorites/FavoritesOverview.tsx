import {
  FAVORITES_PATH,
  MAIN_PATH,
  MainColor,
  createFavoriteShowsPath
} from "@/constants/constants"
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material"

import { FavoriteShowsApiConnector } from "@/features/favorite-shows"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { KeyboardArrowRight } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

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
  const { laptop, desktop } = useResponsive()

  //TODO ADD userId later
  const userId = "userId"
  const BREAD_CRUMBS_ITEMS: { title: string; link: string }[] = [
    { title: t("home"), link: MAIN_PATH },
    { title: t("shows"), link: FAVORITES_PATH },
    { title: t("favorites"), link: createFavoriteShowsPath(userId) }
  ]
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        marginTop: "10rem",
        gap: 1
      }}>
      <Box sx={{ width: "85%" }}>
        <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs">
          {BREAD_CRUMBS_ITEMS.map((item: { title: string; link: string }) => (
            <Link key={item.title} color="primary" href={item.link}>
              {item.title}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>
      {laptop ||
        (desktop && (
          <Box
            sx={{
              width: "85%",
              height: "4rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <Grid
              container
              sx={{
                flex: 1,
                gap: 1
              }}>
              <Typography
                sx={FavoritesOverviewTypographyStyle}
                variant="body1"
                color={MainColor.PRIMARY}>
                {t("dummyText")}
              </Typography>
            </Grid>
          </Box>
        ))}
      <FavoriteShowsApiConnector />
    </Box>
  )
}
