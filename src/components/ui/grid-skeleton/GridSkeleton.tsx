import movies from "@//assets/images/movies.jpg"
import { Skeleton } from "@mui/material"

interface GidSkeletonProps {
  gridLength: number
  skeletonWidth?: string
  skeletonHeight?: string
}

export const GidSkeleton = ({
  gridLength,
  skeletonWidth = "100%",
  skeletonHeight = "100%"
}: GidSkeletonProps) => {
  return Array.from({ length: gridLength }, (_, index) => (
    <Skeleton
      key={index}
      variant="rectangular"
      sx={{
        width: skeletonWidth,
        height: skeletonHeight,
        borderRadius: "1rem",
        objectFit: "cover"
      }}>
      <img
        alt="shows-skeletons"
        aria-label="shows-skeletons"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
        src={movies}
      />
    </Skeleton>
  ))
}
