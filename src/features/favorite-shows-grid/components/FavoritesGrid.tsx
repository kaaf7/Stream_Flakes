import { MediaCard } from "@/components/ui/movie-card"
import { SkeletonGrid } from "@/components/ui/skeleton-grid"
import Media from "@/interfaces/Media"
import { ImageList } from "@mui/material"

interface FavoritesGridProps {
  medias: Media[]
  isLoading: boolean
}

export const FavoritesGrid = ({ medias, isLoading }: FavoritesGridProps) => {
  if (isLoading) {
    return <SkeletonGrid gridLength={28} minmax={"12.5rem"} />
  }
  return (
    <ImageList
      gap={20}
      sx={{
        gridTemplateColumns: "repeat(auto-fill, minmax(12.5rem, 1fr)) !important",
        width: "100%"
      }}>
      {medias.map((media: Media) => (
        <MediaCard key={media.id} id={media.id} imageUrl={media.imageUrl} title={media.title} />
      ))}
    </ImageList>
  )
}
