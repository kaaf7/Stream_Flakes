import { Skeleton } from "@mui/material"

interface GidSkeletonProps {
  gridLength: number
}
export const GidSkeleton = ({ gridLength }: GidSkeletonProps) => {
  return Array.from({ length: gridLength }, (_, index) => (
      <Skeleton
        key={index}
        variant="rectangular"
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "1rem",

        }}>
        <img
          alt="shows-skeletons"
          aria-label="shows-skeletons"
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
          src={
            "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg"
          }
        />
      </Skeleton>
  ))
}
