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
  borderRadius,
  marginRight,
  marginLeft
}: CardSkeletonProps) => {
  return (
    <ImageListItem>
      <Skeleton
        sx={{ bgcolor: "grey.900", borderRadius: borderRadius ?? 2, marginRight, marginLeft }}
        variant="rectangular"
        width={cardSkeletonWidth}
        height={cardSkeletonHeight}
      />
    </ImageListItem>
  )
}
