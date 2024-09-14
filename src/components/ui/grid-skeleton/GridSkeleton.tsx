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
        width: "100%",
        height: "100%",
        borderRadius: "1rem"
      }}>
      <img
        alt="shows-skeletons"
        aria-label="shows-skeletons"
        loading="lazy"
        style={{
          width: skeletonWidth,
          height: skeletonHeight,
          objectFit: "contain"
        }}
        src={
          "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg"
        }
      />
    </Skeleton>
  ))
}
