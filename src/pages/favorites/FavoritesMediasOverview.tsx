import { createFavoriteShowsPath, MAIN_PATH, MainColor, SHOWS_PATH } from "@/constants/constants"

import { FavoriteMediasApiConnector } from "@/features/favorite-medias"
import { useAuth } from "@/hooks/auth/useAuth.ts"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import {
  FavoriteBorder,
  HomeMaxOutlined,
  KeyboardArrowRight,
  LocalMoviesOutlined
} from "@mui/icons-material"
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material"
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
  const { user } = useAuth()

  const BREAD_CRUMBS_ITEMS: { icon: React.ReactNode; title: string; link: string }[] = [
    { icon: <HomeMaxOutlined />, title: t("home"), link: MAIN_PATH },
    { icon: <LocalMoviesOutlined />, title: t("shows"), link: SHOWS_PATH },
    {
      icon: <FavoriteBorder />,
      title: t("favorites"),
      link: createFavoriteShowsPath(user?.id as string)
    }
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
        marginTop: "5rem",
        gap: 3
      }}>
      <Box sx={{ width: "100%" }}>
        <Breadcrumbs
          sx={{ fontSize: ".75rem" }}
          separator={<KeyboardArrowRight />}
          aria-label="breadcrumbs">
          {BREAD_CRUMBS_ITEMS.map(
            (item: { icon: React.ReactNode; title: string; link: string }) => (
              <Link
                key={item.title}
                color={MainColor.PRIMARY}
                href={item.link}
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1
                }}>
                {item.title.toUpperCase()}
              </Link>
            )
          )}
        </Breadcrumbs>
      </Box>
      {laptop ||
        (desktop && (
          <Box
            sx={{
              width: "100%",
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
      <FavoriteMediasApiConnector />
    </Box>
  )
}
