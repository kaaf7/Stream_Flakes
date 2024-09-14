import { MediaCard } from "@/components/ui/media-card"
import { MAIN_PATH, MainColor } from "@/constants/constants.ts"
import { BRAND_ICONS, LandingSection, ShowsSection } from "@/features/home-main"
import { useAuth } from "@/hooks/auth/useAuth.ts"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { HomeMaxOutlined, KeyboardArrowRight } from "@mui/icons-material"
import { Box, Breadcrumbs, Grid, Link } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { user } = useAuth()
  const { t } = useTranslation(["common"])
  const { laptop, desktop } = useResponsive()
  const BREAD_CRUMBS_ITEMS: { icon: React.ReactNode; title: string; link: string }[] = [
    { icon: <HomeMaxOutlined />, title: t("home"), link: MAIN_PATH }
  ]
  return !user?.isLoggedIn ? (
    <>
      <LandingSection />
      <ShowsSection />
    </>
  ) : (
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
      <Box sx={{ height: "1rem" }} />
      <ShowsSection />
    </Box>
  )
}
