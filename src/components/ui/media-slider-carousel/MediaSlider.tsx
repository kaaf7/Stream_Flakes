import { GidSkeleton } from "@/components/ui/grid-skeleton"

import { createMediaPath, TmdbImageSizes } from "@/constants/constants.ts"
import { MediaInterface } from "@/interfaces/MediaInterface.ts"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined"
import { Box, Button } from "@mui/material"
import { SyntheticEvent, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

interface MoviesProps {
  isLoading: boolean
  medias: MediaInterface[]
  containerHeight?: string | any
  cardWidth?: number
  cardHeight?: string | object
  cardCount?: number
  slideTimer?: number
  imageSize?: TmdbImageSizes
}

export const MediaSlider = ({
  isLoading,
  medias,
  containerHeight = "52vh",
  cardCount = 5,
  slideTimer = 10000,
  imageSize = TmdbImageSizes.POSTER_W780
}: MoviesProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const gapWidth = 1 // rem unit for gap between cards
  const cardWidth = `calc((100% - ${(cardCount - 1) * gapWidth}rem) / ${cardCount})`
  const handleSlide = (direction: number) => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.querySelector("img")
      if (cardElement) {
        const cardWidthPx = cardElement.clientWidth
        const scrollOffsetPx = cardWidthPx * cardCount + gapWidth * 16 * cardCount
        scrollRef.current.scrollBy({ left: direction * scrollOffsetPx, behavior: "smooth" })
      }
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const direction = touchStartX - touchEndX

      if (direction > 50) {
        handleSlide(1)
      } else if (direction < -50) {
        handleSlide(-1)
      }
    }

    // Reset touch positions
    setTouchStartX(null)
    setTouchEndX(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide(1)
    }, slideTimer)

    return () => clearInterval(interval)
  }, [slideTimer])

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
          height: containerHeight,
          display: { mobile: "none", tablet: "block", laptop: "block", desktop: "block" },
          position: "absolute",
          zIndex: 100,
          left: "-5rem",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.2
        }}
        onClick={() => handleSlide(-1)}>
        <ArrowLeftOutlinedIcon />
      </Button>

      <Box
        ref={scrollRef}
        sx={{
          width: "100%",
          height: containerHeight,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: `${gapWidth}rem`,
          borderRadius: "1rem",
          position: "relative",
          overflowX: "hidden"
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {isLoading ? (
          <GidSkeleton
            gridLength={cardCount}
            skeletonWidth={cardWidth}
            skeletonHeight={containerHeight as string}
          />
        ) : (
          medias?.map((media: MediaInterface) => (
            <img
              id={media.id}
              alt={media.title}
              onClick={(event: SyntheticEvent) => {
                event.preventDefault()
                navigate(createMediaPath(media.imdb_id as string))
                window.scrollTo(0, 0)
              }}
              src={media?.poster_path?.replace(TmdbImageSizes.POSTER_ORIGINAL, imageSize)}
              key={media.id}
              style={{
                width: cardWidth,
                height: containerHeight,
                borderRadius: "1rem",
                flexShrink: 0,
                objectFit: "cover",
                cursor: "pointer"
              }}
            />
          ))
        )}
      </Box>

      <Button
        sx={{
          width: "1rem",
          height: containerHeight,
          display: { mobile: "none", tablet: "block", laptop: "block", desktop: "block" },
          position: "absolute",
          zIndex: 100,
          right: "-5rem",
          top: "50%",
          transform: "translateY(-50%)",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.2
        }}
        onClick={() => handleSlide(1)}>
        <ArrowRightOutlinedIcon />
      </Button>
    </Box>
  )
}
