import { MAIN_PATH, MainColor, SHOWS_PATH } from "@/constants/constants"
import { HomeMaxOutlined, KeyboardArrowRight, LocalMoviesOutlined } from "@mui/icons-material"
import { Box, Breadcrumbs, Grid, Link } from "@mui/material"

import { MediaCard } from "@/components/ui/movie-card"
import { ShowsGridApiConnector } from "@/features/all-shows"
import { BRAND_ICONS } from "@/features/home"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { useTranslation } from "react-i18next"

export default function ShowsOverview() {
  const { t } = useTranslation(["common"])
  const { laptop, desktop } = useResponsive()

  const BREAD_CRUMBS_ITEMS: { icon: React.ReactNode; title: string; link: string }[] = [
    { icon: <HomeMaxOutlined />, title: t("home"), link: MAIN_PATH },
    { icon: <LocalMoviesOutlined />, title: t("shows"), link: SHOWS_PATH }
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
        gap: 2
      }}>
      <Box sx={{ width: "85%" }}>
        <Breadcrumbs
          sx={{ fontSize: ".75rem" }}
          separator={<KeyboardArrowRight />}
          aria-label="breadcrumbs">
          {BREAD_CRUMBS_ITEMS.map(
            (item: { icon?: React.ReactNode; title: string; link: string }) => (
              <Link key={item.title} color={MainColor.PRIMARY} href={item.link}>
                {item.icon} {item.title}
              </Link>
            )
          )}
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
              {BRAND_ICONS.map((brandIcon) => (
                <MediaCard
                  sx={{ width: "50px", height: "50px" }}
                  key={brandIcon}
                  imageUrl={brandIcon as string}
                  title={brandIcon as string}
                  id={brandIcon as string}
                />
              ))}
            </Grid>
          </Box>
        ))}
      <ShowsGridApiConnector />
    </Box>
  )
}
