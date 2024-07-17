import { Grid } from "@mui/material"
import { MediaCard } from "../movie-card"
interface IconCardProps {
  icon: string
}
export const IconCard = ({ icon }: IconCardProps) => {
  return (
    <Grid key={icon} sm={1} item>
      <MediaCard
        id={icon}
        key={icon}
        aria-label={icon}
        imageUrl={icon}
        title={icon}
        sx={{
          width: "64px",
          height: "64px"
        }}
      />
    </Grid>
  )
}
