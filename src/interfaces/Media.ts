import { ImageListItemProps } from "@mui/material"

export interface MediaCardProps extends ImageListItemProps {
  title: string
  imageUrl: string
  id: string
  needsMediaCardBar?:boolean

}
