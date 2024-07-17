import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material"

import { MediaCardProps } from "@/interfaces/Media"
import { Favorite } from "@mui/icons-material"
import { useState } from "react"

export const MediaCard = ({ id, imageUrl, needsMediaCardBar, ...rest }: MediaCardProps) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <ImageListItem {...rest} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <img
        id={id}
        src={imageUrl}
        alt={imageUrl}
        style={{
          opacity: hover ? 0.5 : 1,
          cursor: hover ? "pointer" : "default",
          transition: ".5s ease-in-out",
          borderRadius: 5
        }}
      />
      {needsMediaCardBar && (
        <ImageListItemBar
          sx={{ background: "none" }}
          actionIcon={
            <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={"info"}>
              <Favorite />
            </IconButton>
          }></ImageListItemBar>
      )}
    </ImageListItem>
  )
}
