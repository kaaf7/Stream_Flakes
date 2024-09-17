import apple_app_store from "@/assets/images/apple_app_store.svg"
import google_app_store from "@/assets/images/google_app_store.svg"
import movies from "@/assets/images/movies.jpg"
import { CustomButton } from "@/components/buttons/custom-button"
import { MediaCard } from "@/components/ui/media-card"
import { SHOWS_PATH } from "@/constants/constants"
import { BRAND_ICONS } from "@/features/home-main"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { Add } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const LandingSection = () => {
  const { mobile, desktop } = useResponsive()

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: { mobile: "center", tablet: "center", desktop: "center" },
        alignItems: { mobile: "center", tablet: "space-between", desktop: "center" },
        overflow: "hidden"
      }}>
      <Grid
        container
        direction="column"
        sx={{
          width: "100%",
          height: "100vh",
          zIndex: 2,
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: { mobile: 10, tablet: 10, laptop: 1, desktop: 3 }
        }}>
        <Box
          sx={{
            height: { mobile: "70vh", tablet: "40vh", desktop: "40vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "space-between",
            gap: { mobile: 2, tablet: 2, laptop: 1, desktop: 2 },
            zIndex: 2
          }}>
          <Typography variant={mobile ? "h4" : desktop ? "h2" : "h3"} sx={{ fontWeight: "bold" }}>
            Your Favorite Shows in <br></br>
            <span style={{ color: "#c70c0c" }}>One Place</span>
          </Typography>
          <Typography variant={mobile ? "body2" : "h6"}>
            Browse, search, and watch TV & Movies from over 300+ services across many regions
          </Typography>
          <Grid
            container
            sx={{
              width: "100%",
              height: { mobile: "10rem", tablet: "7rem", laptop: "3rem", desktop: "3rem" },
              justifyContent: "center",
              alignItems: "center",
              gap: { mobile: 2, tablet: 1, desktop: 1 }
            }}>
            {BRAND_ICONS.map((brandIcon) => (
              <MediaCard
                imageUrl={brandIcon}
                id={brandIcon}
                sx={{
                  width: { mobile: "64px", tablet: "64px", laptop: "64px", desktop: "64px" },
                  height: { mobile: "64px", tablet: "64px", laptop: "64px", desktop: "64px" }
                }}
              />
            ))}
            <CustomButton
              sx={{
                width: { mobile: "20px", tablet: "64px", laptop: "64px", desktop: "64px" },
                height: { mobile: "20px", tablet: "64px", laptop: "64px", desktop: "64px" }
              }}
              variant={mobile ? "text" : "outlined"}
              component={Link}
              to={SHOWS_PATH}>
              <Add fontSize={"small"} />
            </CustomButton>
          </Grid>
          <Grid
            container
            sx={{
              width: "100%",
              height: "3rem",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: { mobile: 3, tablet: 1, laptop: 1, desktop: 2 }
            }}>
            <MediaCard
              sx={{
                width: { mobile: "120px", tablet: "150px", laptop: "150px", desktop: "180px" }
              }}
              imageUrl={apple_app_store}
              title={apple_app_store}
              id={"apple_app_store"}
            />
            <MediaCard
              sx={{
                width: { mobile: "120px", tablet: "150px", laptop: "150px", desktop: "180px" }
              }}
              imageUrl={google_app_store}
              title={google_app_store}
              id={"google_app_store"}
            />
          </Grid>
        </Box>
      </Grid>
      <img
        src={movies}
        alt="Movies"
        loading="lazy"
        style={{
          width: "100%",
          height: "100vh",
          minWidth: "100vw",
          display: "block",
          objectPosition: "center center",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "blur(2px) brightness(15%)"
        }}
      />

      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          background: "linear-gradient(to right, rgba(17,17,17,1) 3%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          background: "linear-gradient(to left, rgba(17,17,17,1) 2%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          background: "linear-gradient(to top, rgba(17,17,17,1) 4%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
    </Box>
  )
}
