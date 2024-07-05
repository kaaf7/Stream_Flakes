import { Box, Grid, Typography, useTheme } from "@mui/material"

import apple_app_store from "@/assets/images/apple_app_store.svg"
import google_app_store from "@/assets/images/google_app_store.svg"
import movies from "@/assets/images/movies.jpg"
import { CustomButton } from "@/components/buttons/custom-button"
import { MediaCard } from "@/components/ui/movie-card"
import { BRAND_ICONS } from "@/features/home"
import { Link } from "react-router-dom"

export const FirstSection = () => {
  const theme = useTheme()
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Box
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute"
        }}>
        <Grid
          container
          direction="column"
          spacing={2}
          sx={{
            height: "auto",
            width: "60%",
            zIndex: 2,
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 1
          }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Your Favorite Shows in <br></br>
            <span style={{ color: "orange" }}>One Place</span>
          </Typography>
          <Typography>
            Browse, search, and watch TV & Movies from over 300+ services across many regions
          </Typography>
          <Typography sx={{ color: "grey", marginTop: 3 }}>Streaming From</Typography>
          <Grid
            container
            sx={{
              width: "100%",
              height: "100px",
              justifyContent: "center",
              alignItems: "center",
              gap: 1
            }}>
            {BRAND_ICONS.map((brandIcon) => (
              <Grid key={brandIcon} sm={1} item>
                <MediaCard
                  sx={{ width: "64px", height: "64px" }}
                  key={brandIcon}
                  imageUrl={brandIcon as string}
                  title={brandIcon as string}
                  id={brandIcon as string}
                />
              </Grid>
            ))}
            <CustomButton
              sx={{ width: "100px", height: "50px" }}
              variant={"outlined"}
              component={Link}
              to={"/shows"}>
              More
            </CustomButton>
          </Grid>
          <Grid
            container
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent:"center",
              maxHeight:"50px",
              gap:2
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
          filter: "blur(5px) brightness(20%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.2))",
          zIndex: 1
        }}
      />
    </main>
  )
}
