import { ImageListItemProps } from "@mui/material"

export interface MediaCardProps  extends ImageListItemProps {
  id: string
  imageUrl: string
  isFavorite?:boolean
  needsMediaCardBar?: boolean
}
