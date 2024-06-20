import { MediaCard } from "@/components/ui/movie-card"
import { Media } from "@/interfaces/Media"
import { Grid } from "@mui/material"

export const MediaGrid = (medias: Media[]) => {
  return (
    <Grid container spacing={2}>
      {medias.map((media: Media) => (
        <MediaCard key={media.id} title={media.title} id={media.id} imageUrl={media.imageUrl} />
      ))}
    </Grid>
  )
}
