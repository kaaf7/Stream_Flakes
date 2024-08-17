import { ButtonVariant, MainColor } from "@/constants/constants"
import {
  AccessTimeFilledOutlined,
  CommentOutlined,
  FourKOutlined,
  PlayArrowOutlined,
  PublicOutlined
} from "@mui/icons-material"
import { Box, Grid, Typography, useTheme } from "@mui/material"

import movies from "@/assets/images/movies.jpg"
import { CustomButton } from "@/components/buttons/custom-button"
import { MediaCard } from "@/components/ui/movie-card"
import { BRAND_ICONS } from "@/features/home-main"
import { useTranslation } from "react-i18next"

interface MediaInfoDisplayProps {
  isLoading: boolean
}
export const MediaInfoDisplay = () => {
  const { t } = useTranslation(["common"])
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh"
      }}>
      <img
        src={movies}
        alt="Movies"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "blur(1px) brightness(25%)",
          zIndex: 0
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to right, rgba(17,17,17,1) 10%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to left, rgba(17,17,17,1) 1%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
       <div
        style={{
          position: "absolute",
          background: "linear-gradient(to top, rgba(17,17,17,1) 2%, rgba(0,0,0,0) 50%)", 
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      <Grid
        container
        direction={"column"}
        sx={{
          justifyContent: "center",
          justifyItems: "space-between",
          position: "relative"
        }}>
        <Grid item sx={{ zIndex: 100 }}>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
              zIndex: 100
            }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "900",
                fontSize: "6rem",
                letterSpacing: "normal",
                color: theme.palette.text.primary
              }}>
              DEAD POOL
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                textAlign: "flex-end",
                alignContent: "flex-end",
                gap: 2
              }}>
              <Typography variant="body2" sx={{ color: theme.palette.text.disabled }}>
                Action
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  alignContent: "flex-start"
                }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.disabled }}>
                  4.5
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  alignContent: "flex-start"
                }}>
                <FourKOutlined fontSize={"small"} sx={{ color: theme.palette.text.disabled }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                  gap: 0.5
                }}>
                <AccessTimeFilledOutlined
                  fontSize={"small"}
                  sx={{ color: theme.palette.text.disabled }}
                />
                <Typography variant="body2" sx={{ color: theme.palette.text.disabled }}>
                  120
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                  gap: 0.5
                }}>
                <PublicOutlined fontSize={"small"} sx={{ color: theme.palette.text.disabled }} />
                <Typography variant="body2" sx={{ color: theme.palette.text.disabled }}>
                  English
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "7rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                  gap: 0.5
                }}>
                <CommentOutlined fontSize={"small"} sx={{ color: theme.palette.text.disabled }} />
                <Typography variant="body2" sx={{ color: theme.palette.text.disabled }}>
                  Subtitles
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography>{t("dummyText")}</Typography>
            </Box>
            <Box>
              <CustomButton variant={ButtonVariant.OUTLINED}>
                <PlayArrowOutlined />
                {t("checkMovie")}
              </CustomButton>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2
              }}>
              <Grid>
                <Typography
                  color={MainColor.PRIMARY}
                  variant="body1"
                  sx={{
                    fontWeight: "bold"
                  }}>
                  {t("streamsAt")}
                </Typography>
              </Grid>
              <Grid
                container
                sx={{
                  flex: 1,
                  gap: 1
                }}>
                {BRAND_ICONS.map((brandIcon) => (
                  <MediaCard
                    sx={{ width: "4rem", height: "4rem" }}
                    key={brandIcon}
                    imageUrl={brandIcon as string}
                    title={brandIcon as string}
                    id={brandIcon as string}
                  />
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
