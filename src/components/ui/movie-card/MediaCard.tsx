import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material"

import { MediaCardProps } from "@/interfaces/MediaCardProps"
import { Favorite } from "@mui/icons-material"
import { useState } from "react"

export const MediaCard = ({ id, imageUrl, needsMediaCardBar, ...rest }: MediaCardProps) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <ImageListItem {...rest} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <img
        id={id}
        src={imageUrl}
        data-src={imageUrl}
        alt={"shows-images"}
        aria-label={"shows-images"}
        loading={"lazy"}
        style={{
          opacity: hover ? 0.5 : 1,
          cursor: hover ? "pointer" : "default",
          transition: ".5s ease-in-out",
          objectFit:"fill",
          borderRadius: "1rem"
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
