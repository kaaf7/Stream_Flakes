import { CardSkeleton, CardSkeletonProps } from "../card-skeleton/"

import { ImageList } from "@mui/material"

interface SkeletonGridProps {
  minmax: string
  gridWidth?: string
  gridHeight?:string
  gridLength: number
  gap?: number
  cardSkeletonProp?: CardSkeletonProps
}

export const SkeletonGrid = ({
  gridWidth,
  gridHeight,
  gridLength,
  cardSkeletonProp,
  minmax,
  gap
}: SkeletonGridProps) => {
  const cardSkeletons = Array.from({ length: gridLength }, (_, index) => (
    <CardSkeleton cardSkeletonHeight="20rem" {...cardSkeletonProp} key={index} />
  ))
  return (
    <ImageList
      gap={gap ?? 20}
      sx={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${minmax}, 1fr)) !important`,
        width: gridWidth ?? "100%",
        height: gridHeight ?? "100%"
      }}>
      {cardSkeletons}
    </ImageList>
  )
}
