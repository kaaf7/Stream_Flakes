import { GidSkeleton } from "@/components/ui/grid-skeleton"
import { MediaCardUpdated } from "@/components/ui/media-card-updated"
import { createMediaPath } from "@/constants/constants"
import { useScrollPagination } from "@/hooks/ifninite-scroll/useScrollPagination"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { MediaCardProps } from "@/interfaces/MediaCardProps"
import { ImageList } from "@mui/material"
import { memo } from "react"
import { useNavigate } from "react-router-dom"

interface MediaGridProps {
  medias: MediaCardProps[]
  needsMediaCardBar?: boolean
  isLoading: boolean
}

export const MediaGrid = ({ medias, needsMediaCardBar, isLoading }: MediaGridProps) => {
  const { mobile, tablet } = useResponsive()
  const navigate = useNavigate()
  const { currentPage } = useScrollPagination()
  const MemoizedGridSkeleton = memo(GidSkeleton)

  return (
    <ImageList
      gap={10}
      cols={mobile ? 2 : tablet ? 3 : 6}
      sx={{
        height:  "auto",
        boxSizing: "border-box",
        overflow: "hidden",
        flexWrap: "wrap"
      }}>
      {isLoading && currentPage === 0 ? (
        <MemoizedGridSkeleton gridLength={12} />
      ) : (
        medias.map((media: MediaCardProps) => (
          <MediaCardUpdated
          onClick={()=>navigate(createMediaPath("mediaid"))}
            key={media.id}
            id={media.id}
            needsMediaCardBar={needsMediaCardBar}
            isFavorite={media.isFavorite}
            imageUrl={media.imageUrl}
          />
        ))
      )}
      {isLoading&& currentPage > 0 && <MemoizedGridSkeleton gridLength={12} />}
    </ImageList>
  )
}
