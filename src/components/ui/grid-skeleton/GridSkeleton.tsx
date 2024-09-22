import Skeleton_Landscape from "@/assets/skeletons/Skeleton_Landscape.jpg"
import Skeleton_Portrait from "@/assets/skeletons/Skeleton_Portrait.jpg"
import { Skeleton } from "@mui/material"

interface GidSkeletonProps {
  gridLength: number
  skeletonWidth?: string
  skeletonHeight?: string
  isPortrait?: boolean
}

export const GidSkeleton = ({
  gridLength,
  skeletonWidth = "100%",
  skeletonHeight = "100%",
  isPortrait = true
}: GidSkeletonProps) => {
  return Array.from({ length: gridLength }, (_, index) => (
    <Skeleton
      key={index}
      variant="rectangular"
      sx={{
        width: skeletonWidth,
        height: skeletonHeight,
        borderRadius: "1rem"
      }}>
      <img
        alt="shows-skeletons"
        aria-label="shows-skeletons"
        loading="lazy"
        style={{
          width: skeletonWidth,
          height: skeletonHeight,
          objectFit: "cover",
          aspectRatio: "2 / 3"
        }}
        src={isPortrait ? Skeleton_Portrait : Skeleton_Landscape}
      />
    </Skeleton>
  ))
}
