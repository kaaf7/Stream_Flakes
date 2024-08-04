import { MAIN_PATH, SHOWS_PATH } from "@/constants/constants"
import { Box, Breadcrumbs, Grid, Link } from "@mui/material"

import { MediaCard } from "@/components/ui/movie-card"
import { ShowsGridApiConnector } from "@/features/all-shows"
import { BRAND_ICONS } from "@/features/home"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { KeyboardArrowRight } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

export default function ShowsOverview() {
  const { t } = useTranslation(["common"])
  const { laptop, desktop } = useResponsive()

  const BREAD_CRUMBS_ITEMS: { title: string; link: string }[] = [
    { title: t("home"), link: MAIN_PATH },
    { title: t("shows"), link: SHOWS_PATH }
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
      </Box>  ))}
      <ShowsGridApiConnector />
    </Box>
  )
}
