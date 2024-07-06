import { Box, useTheme } from "@mui/material"

import movies from "@/assets/images/movies.jpg"
import { DisplayCard } from "@/components/ui/display-card"

export const SecondSection = () => {
  const theme = useTheme()

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Box
        sx={{
          width: "85%",
          height: "500px",
          display: "flex",
          justifyContent: "space-between",
          gap: 3
        }}>
        <DisplayCard
        
          title="Movies"
          image={movies}
        
          direction="left"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica"
        />
        <DisplayCard
          title="Movies"
          image={movies}
          description="   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica"
        />
        <DisplayCard
          direction="right"
          title="Movies"
          image={movies}
          description="   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica"
        />
      </Box>
    </div>
  )
}
