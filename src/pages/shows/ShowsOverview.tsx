import { Box, Grid } from "@mui/material"

import { MediaCard } from "@/components/ui/movie-card"
import { ShowsGridApiConnector } from "@/features/all-shows"
import { BRAND_ICONS } from "@/features/home"

export default function ShowsOverview() {
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
      <ShowsGridApiConnector />
    </Box>
  )
}
