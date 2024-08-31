import { Box, Button } from "@mui/material"
import { useEffect, useRef } from "react"

import { TmdbImageSizes } from "@/constants/constants.ts"
import { MediaCardProps } from "@/interfaces/MediaCardProps.ts"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined"
import { GidSkeleton } from "@/components/ui/grid-skeleton"

interface MoviesProps {
  isLoading: boolean
  medias: MediaCardProps[]
  containerHeight?: string
  cardWidth?: number
  cardHeight?: string
  cardCount?: number
  slideTimer?: number
}

export const MediaSlider = ({
  isLoading,
  medias,
  containerHeight = "52vh",
  cardWidth = 14.2,
  cardHeight = "50vh",
  cardCount = 5,
  slideTimer = 10000
}: MoviesProps) => {
  const scrollRef = useRef(null)

  const gapWidth = 1
  const scrollOffset = cardWidth * (cardCount - 2) + gapWidth * (cardCount - 2)
  const scrollOffsetPx = scrollOffset * 16

  const handleSlide = (direction: number) => {
    // @ts-ignore
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
          transform: "translateY(-50%)",
          opacity: 0.5

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
        {isLoading ? (
          <GidSkeleton
            gridLength={cardCount}
            skeletonWidth={`${cardWidth}rem`}
            skeletonHeight={cardHeight}
          />
        ) : (
          medias?.map((media: MediaCardProps) => (
            <img
              id={media.id}
              alt={media.title}
              src={media?.poster_path?.replace(TmdbImageSizes.POSTER_ORIGINAL, TmdbImageSizes.POSTER_W780)}
              key={media.id}
              style={{
                width: `${cardWidth}rem`,
                height: cardHeight,
                borderRadius: "1rem",
                flexShrink: 0,
                objectFit: "cover"
              }}
            />
          ))
        )}
      </Box>
      <Button
        sx={{
          width: "1rem",
          height: cardHeight,
          position: "absolute",
          zIndex: 100,
          right: "-5rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5
        }}
        onClick={() => handleSlide(1)}>
        <ArrowRightOutlinedIcon />
      </Button>
    </Box>
  )
}
