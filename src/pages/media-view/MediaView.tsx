import { MAIN_PATH, MainColor, SHOWS_PATH } from "@/constants/constants"
import { HomeMaxOutlined, KeyboardArrowRight, LocalMoviesOutlined } from "@mui/icons-material"
import { Box, Breadcrumbs, Link } from "@mui/material"

import { MediaDetailView } from "@/features/media-detail-view"
import { useTranslation } from "react-i18next"

export default function MediaView() {
  const {t}=useTranslation(["common"])
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
        gap: 3
      }}>
      <Box sx={{ width: "100%", zIndex: 100 }}>
        <Breadcrumbs
          sx={{ fontSize: ".75rem" }}
          separator={<KeyboardArrowRight />}
          aria-label="breadcrumbs">
          {BREAD_CRUMBS_ITEMS.map(
            (item: { icon?: React.ReactNode; title: string; link: string }) => (
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
                {item.title} {item.icon}
              </Link>
            )
          )}
        </Breadcrumbs>
      </Box>
      <MediaDetailView />
    </Box>
  )
}
