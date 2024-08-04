import { GidSkeleton } from "@/components/ui/grid-skeleton"
import { MediaCardUpdated } from "@/components/ui/media-card-updated"
import { useScrollPagination } from "@/hooks/ifninite-scroll/useScrollPagination"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { Media } from "@/interfaces/Media"
import { ImageList } from "@mui/material"
import { memo } from "react"

interface MediaGridProps {
  medias: Media[]
  isLoading: boolean
}

export const FavoritesGrid = ({ medias, isLoading }: MediaGridProps) => {
  const { mobile, tablet } = useResponsive()
  const { currentPage } = useScrollPagination()
  const MemoizedGridSkeleton = memo(GidSkeleton)
  
  return (
    <ImageList gap={10} cols={mobile || tablet ? 2 : 6} sx={{ width: "100%", height: "100%" }}>
      {isLoading && currentPage === 0 ? (
        <MemoizedGridSkeleton gridLength={18} />
      ) : (
        medias.map((media: Media, index: number) => (
          <MediaCardUpdated
            borderRadius={"1rem"}
            key={index}
            id={media.id}
            isLoading={isLoading}
            isFavorite={true}
            needsMediaCardBar={true}
            imageUrl={media.imageUrl}
          />
        ))
      )}
      {isLoading && currentPage >0 && <MemoizedGridSkeleton gridLength={12} />}
    </ImageList>
  )
}
