import { User } from "@/components/Auth/AuthProvider.tsx"
import { MainColor } from "@/constants/constants"
import { FavoriteOutlined } from "@mui/icons-material"
import { Box, BoxProps, IconButton, ImageListItemBar } from "@mui/material"
import { SyntheticEvent, useState } from "react"

export interface MediaCardProps extends BoxProps {
  id: string
  alt?: string
  width?: string
  height?: string
  borderRadius?: string
  imageUrl: string
  needsMediaCardBar?: boolean
  isFavorite?: boolean
  user?: User

  onClick?(event: SyntheticEvent): void

  onIconClick?(event: SyntheticEvent): void
}

export const MediaCard = ({
  id,
  alt,
  imageUrl,
  needsMediaCardBar = false,
  user,
  isFavorite = false,
  onClick,
  onIconClick,
  borderRadius = "1rem",

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
        alt={alt}
        aria-label={alt}
        onClick={onClick}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: borderRadius,
          objectFit: "cover",
          aspectRatio: "2 / 3",
          opacity: hover ? 0.6 : 1,
          cursor: hover ? "pointer" : "default",
          transition: "opacity 0.5s ease-in-out"
        }}
      />
      {needsMediaCardBar && user?.isLoggedIn && (
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
              onClick={onIconClick}
              aria-label="favorite"
              sx={{
                backgroundColor: "rgba(125, 125, 125, 0.2)"
              }}>
              <FavoriteOutlined color={isFavorite ? MainColor.WARNING : MainColor.PRIMARY} />
            </IconButton>
          }
        />
      )}
    </Box>
  )
}
