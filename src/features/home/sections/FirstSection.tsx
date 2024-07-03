import { Grid, Typography } from "@mui/material"

import movies from "@/assets/images/movies.jpg"

export const FirstSection = () => {
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
      <div
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
            textAlign: "center"
          }}>
          <Typography variant="h3">Your Favorite Shows in One Place</Typography>
          <Typography>
            Browse, search, and watch TV & Movies from over 300+ services across many regions
          </Typography>

          <Typography sx={{ color: "grey", marginTop: 5 }}>Streaming From</Typography>
        </Grid>
      </div>
      <img
        src={movies}
        alt="Movies"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(8px) brightness(40%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
          zIndex: 1
        }}
      />
    </main>
  )
}
