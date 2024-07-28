import { IconButton, ImageListItem, ImageListItemBar, ImageListItemProps } from "@mui/material"

import { MainColor } from "@/constants/constants"
import { Favorite } from "@mui/icons-material"
import { useState } from "react"

export interface MediaCardProps extends ImageListItemProps {
  id: string
  width?: string
  height?: string
  borderRadius?: string
  imageUrl: string
  needsMediaCardBar?: boolean
  isFavorite?: boolean
}

export const MediaCardUpdated = ({
  id,
  imageUrl,
  width = "20rem",
  height = "20rem",
  borderRadius = "1rem",
  needsMediaCardBar = false,
  isFavorite = false,
  ...props
}: MediaCardProps) => {

  const [hover, setHover] = useState<boolean>(false)
  
  return (
    <ImageListItem {...props} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <img
        id={id}
        src={imageUrl}
        width={width}
        height={height}
        alt="shows-images"
        aria-label="shows-images"
        loading="lazy"
        style={{
          borderRadius: borderRadius,
          opacity: hover ? 0.5 : 1,
          cursor: hover ? "pointer" : "default",
          transition: "opacity 0.5s ease-in-out"
        }}
      />
      )
      {needsMediaCardBar && (
        <ImageListItemBar
          sx={{ background: "none" }}
          actionIcon={
            <IconButton aria-label="favorite">
              <Favorite color={isFavorite ? MainColor.WARNING : MainColor.PRIMARY} />
            </IconButton>
          }
        />
      )}
    </ImageListItem>
  )
}
