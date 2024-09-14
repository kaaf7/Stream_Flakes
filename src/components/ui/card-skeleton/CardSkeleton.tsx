import { ImageListItem, Skeleton } from "@mui/material"

export interface CardSkeletonProps {
  cardSkeletonWidth?: string
  cardSkeletonHeight?: string
  borderRadius?: number
  marginRight?: number
  marginLeft?: number
}

export const CardSkeleton = ({
  cardSkeletonWidth,
  cardSkeletonHeight,
  borderRadius = 2,
  marginRight,
  marginLeft
}: CardSkeletonProps) => {
  return (
    <ImageListItem>
      <Skeleton
        sx={{
          backgroundColor: "grey.900",
          borderRadius: borderRadius,
          marginRight,
          marginLeft
        }}
        variant="rectangular"
        width={cardSkeletonWidth}
        height={cardSkeletonHeight}
      />
    </ImageListItem>
  )
}
