import { Box, BoxProps, IconButton, ImageListItemBar } from "@mui/material"

import { MainColor } from "@/constants/constants"
import { Favorite } from "@mui/icons-material"
import { useState } from "react"

export interface MediaCardProps extends BoxProps {
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
  needsMediaCardBar = false,
  isFavorite = false,
  ...props
}: MediaCardProps) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem"
      }}
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}>
      <img
        id={id}
        src={imageUrl}
        alt="shows-images"
        aria-label="shows-images"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hover ? 0.6 : 1,
          cursor: hover ? "pointer" : "default",
          transition: "opacity 0.5s ease-in-out"
        }}
      />
      {needsMediaCardBar && (
        <ImageListItemBar
          sx={{
            background: "none",
            position: "absolute",
            bottom: 8,
            right: 8,
            width: "auto",
            height: "auto"
          }}
          actionIcon={
            <IconButton
              aria-label="favorite"
              sx={{
                backgroundColor: "rgba(125, 125, 125, 0.4)"
              }}>
              <Favorite color={isFavorite ? MainColor.WARNING : MainColor.PRIMARY} />
            </IconButton>
          }
        />
      )}
    </Box>
  )
}
