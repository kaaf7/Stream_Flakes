import movies from "@/assets/images/movies.jpg"
import { CardSkeleton } from "@/components/ui/card-skeleton/CardSkeleton"
import { DisplayCard } from "@/components/ui/display-card"
import { Box } from "@mui/material"

interface SecondSectionProps {
  isLoading: boolean
  data?: any
}

export const LatestShows = ({ isLoading, data }: SecondSectionProps) => {
  const createCardSkeleton = Array.from({ length: 3 }, (_, index) => (
    <CardSkeleton
      key={index}
      cardSkeletonHeight="500px"
      cardSkeletonWidth="400px"
      marginLeft={0}
      marginRight={0}
    />
  ))

  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

      }}>
      <Box
        sx={{
          width: "100%",
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          gap: 3
        }}>
        {isLoading || !data ? (
          createCardSkeleton
        ) : (
          <>
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
          </>
        )}
      </Box>
    </div>
  )
}
