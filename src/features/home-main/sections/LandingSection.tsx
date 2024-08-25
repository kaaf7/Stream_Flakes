import { Box, Grid, Typography } from "@mui/material"

import apple_app_store from "@/assets/images/apple_app_store.svg"
import google_app_store from "@/assets/images/google_app_store.svg"
import movies from "@/assets/images/movies.jpg"
import { CustomButton } from "@/components/buttons/custom-button"
import { IconCard } from "@/components/ui/icon-card"
import { MediaCard } from "@/components/ui/movie-card"
import { SHOWS_PATH } from "@/constants/constants"
import { BRAND_ICONS } from "@/features/home-main"
import { Add } from "@mui/icons-material"
import { Link } from "react-router-dom"

export const LandingSection = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}>
      <Box
        style={{
          height: "100%",
          width: "80rem",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",

          alignItems: "center",
          position: "absolute"
        }}>
        <Grid
          container
          direction="column"
          spacing={2}
          sx={{
            height: "40rem",
            width: "80rem",
            zIndex: 2,
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 2
          }}>
          <Box sx={{ height: "15rem", display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Your Favorite Shows in <br></br>
              <span style={{ color: "#c70c0c" }}>One Place</span>
            </Typography>
            <Typography>
              Browse, search, and watch TV & Movies from over 300+ services across many regions
            </Typography>
            <Typography sx={{ color: "grey", marginTop: 3 }}>Streaming From</Typography>
          </Box>
          <Grid
            container
            sx={{
              width: "100%",
              height: "5rem",
              justifyContent: "center",
              alignItems: "center",
              gap: 1
            }}>
            {BRAND_ICONS.map((brandIcon) => (
              <IconCard icon={brandIcon} />
            ))}
            <CustomButton
              sx={{ width: "5ßpx", height: "64px" }}
              variant={"outlined"}
              component={Link}
              to={SHOWS_PATH}>
              <Add />
            </CustomButton>
          </Grid>
          <Grid
            container
            sx={{
              width: "100%",
              height: "10rem",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              maxHeight: "50px",
              gap: 5
            }}>
            <MediaCard
              sx={{ width: "150px" }}
              imageUrl={apple_app_store}
              title={apple_app_store}
              id="apple_app_store"
            />
            <MediaCard
              sx={{ width: "150px" }}
              imageUrl={google_app_store}
              title={google_app_store}
              id="google_app_store"
            />
          </Grid>
        </Grid>
      </Box>
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
          filter: "blur(2px) brightness(15%)",
          zIndex: 0
        }}
      />
      
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to right, rgba(17,17,17,1) 3%, rgba(0,0,0,0) 30%)", 
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
          background: "linear-gradient(to left, rgba(17,17,17,1) 2%, rgba(0,0,0,0) 30%)", 
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
          background: "linear-gradient(to top, rgba(17,17,17,1) 4%, rgba(0,0,0,0) 30%)", 
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
    </Box>
  )
}
