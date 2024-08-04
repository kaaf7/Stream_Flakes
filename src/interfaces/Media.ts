import { ImageListItemProps } from "@mui/material"

export interface Media extends ImageListItemProps {
  id: string
  imageUrl: string
  needsMediaCardBar?: boolean
}
