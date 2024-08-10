import { Box } from "@mui/material"
import { useState } from "react"

export const DialogMediaCard = ({ img }: { img: string }) => {
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
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}>
      <img
        src={img}
        alt={img}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hover ? 0.6 : 1,
          cursor: hover ? "pointer" : "default",
          transition: "opacity 0.5s ease-in-out"
        }}
        loading="lazy"
      />
    </Box>
  )
}
