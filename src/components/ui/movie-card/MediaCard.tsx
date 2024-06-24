import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material"

import { Media } from "@/interfaces/Media"
import { Favorite } from "@mui/icons-material"
import { useState } from "react"

export const MediaCard = ({ imageUrl }: Media) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <ImageListItem onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <img
        src={imageUrl}
        alt={imageUrl}
        loading="lazy"
        style={{
          opacity: hover ? 0.5 : 1,
          cursor: hover ? "pointer" : "default",
          transition: ".5s ease-in-out"
        }}
      />
      <ImageListItemBar
        sx={{ background: "none" }}
        actionIcon={
          <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about`}>
            <Favorite />
          </IconButton>
        }></ImageListItemBar>
    </ImageListItem>
  )
}
