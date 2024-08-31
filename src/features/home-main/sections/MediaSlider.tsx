import { Box, Button } from "@mui/material"
import { useEffect, useRef } from "react"

import { TmdbImageSizes } from "@/constants/constants"
import { MediaCardProps } from "@/interfaces/MediaCardProps"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined"

interface MoviesProps {
  isLoading: boolean
  medias: MediaCardProps[]
  containerHeight?: string
  cardWidth?: number
  cardHeight?: string
  cardCount?: number
  slideTimer?:number
}

export const MediaSlider = ({
  isLoading,
  medias,
  containerHeight = "55vh",
  cardWidth = 14.2,
  cardHeight="50vh",
  cardCount = 5,
  slideTimer=5000
}: MoviesProps) => {
  const scrollRef = useRef(null)

  const gapWidth = 1
  const scrollOffset = cardWidth * cardCount + gapWidth * cardCount
  const scrollOffsetPx = scrollOffset * 16

  const handleSlide = (direction: number) => {
    scrollRef?.current?.scrollBy({ left: direction * scrollOffsetPx, behavior: "smooth" })
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide(1)
    }, slideTimer)

    return () => clearInterval(interval)
  }, [])
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "75rem",
        height: containerHeight,
        display: "flex",
        alignItems: "center",
        borderRadius: "1rem",
        justifyContent: "center"
      }}>
      <Button
        sx={{
          width: "1rem",
          height: cardHeight,
          position: "absolute",
          zIndex: 100,
          left: "-5rem",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        onClick={() => handleSlide(-1)}>
        <ArrowLeftOutlinedIcon />
      </Button>

      <Box
        ref={scrollRef}
        sx={{
          width: `calc((${cardWidth}rem * ${cardCount}) + (1rem * ${cardCount - 1}))`,
          height: cardHeight,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          overflowX: "hidden",
          alignItems: "center",
          gap: "1rem",
          borderRadius: "1rem",
          position: "relative"
        }}>
        {medias?.map((media: MediaCardProps) => (
          <img
            id={media.id}
            alt={media.title}
            src={media?.poster_path?.replace("original", TmdbImageSizes.LOGO_W500)}
            key={media.id}
            style={{
              width: `${cardWidth}rem`,
              height: cardHeight,
              borderRadius: "1rem",
              flexShrink: 0,
              objectFit: "cover"
            }}
          />
        ))}
      </Box>
      <Button
        sx={{
          width: "1rem", // Set the same width as height to make it a circle
          height: cardHeight, // Set a fixed height
          position: "absolute",
          zIndex: 100,
          right: "-5rem",
          top: "50%",
          transform: "translateY(-50%)", // Adjust for centering vertically
          display: "flex", // Center the content inside the button
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => handleSlide(1)}>
        <ArrowRightOutlinedIcon fontSize="large" />
      </Button>
    </Box>
  )
}
