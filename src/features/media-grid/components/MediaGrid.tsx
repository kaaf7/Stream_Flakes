import { MediaCard } from "@/components/ui/movie-card"
import { Media } from "@/interfaces/Media"
import { ImageList } from "@mui/material"

interface MediaGridProps {
  medias: Media[]
}

export const MediaGrid = ({ medias }: MediaGridProps) => {
  return (
    <ImageList
      gap={5}
      sx={{
        gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr)) !important",
        padding: 5
      }}>
      {medias.map((media: Media) => (
        <MediaCard key={media.id} id={media.id} imageUrl={media.imageUrl} title={media.title} />
      ))}
    </ImageList>
  )
}
