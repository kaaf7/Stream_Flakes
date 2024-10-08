import { GidSkeleton } from "@/components/ui/grid-skeleton"
import { MediaCard } from "@/components/ui/media-card"
import { createMediaPath, MainColor, TmdbImageSizes } from "@/constants/constants"
import { MediaInterface } from "@/interfaces/MediaInterface.ts"
import { Box, Container, Divider, ImageList, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

interface TrendingShowsSearchDisplayProps {
  isLoading: boolean
  medias: MediaInterface[]
}

export const ExploreShowsSearchDisplay = ({
  isLoading,
  medias
}: TrendingShowsSearchDisplayProps) => {
  const { t } = useTranslation(["common"])
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <Container
      sx={{
        width: "25rem",
        height: "30rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "flex-start",
        alignItems: "flex-end",
        gap: 1
      }}>
      <Box sx={{ width: "20rem" }}>
        <Typography
          color={MainColor.PRIMARY}
          variant="body1"
          sx={{
            fontWeight: "bold"
          }}>
          {t("trending")}
        </Typography>
        <Divider
          sx={{
            height: ".1px",
            borderBottom: `2px solid ${theme.palette.background.paper}`
          }}></Divider>
      </Box>
      <Box sx={{ flexDirection: "column", height: "20rem", justifyContent: "center" }}>
        <ImageList
          sx={{
            width: "20rem",
            height: "20rem",
            overflowY: "hidden"
          }}
          cols={3}
          gap={5}
          variant="woven">
          {isLoading ? (
            <GidSkeleton gridLength={6} />
          ) : (
            <>
              {medias?.map((media) => (
                <MediaCard
                  key={media.id}
                  id={media.id}
                  onClick={() => {
                    window.scrollTo(0, 0)
                    navigate(createMediaPath(media.imdb_id as string))
                  }}
                  needsMediaCardBar={false}
                  imageUrl={
                    media.poster_path?.replace(
                      TmdbImageSizes.POSTER_ORIGINAL,
                      TmdbImageSizes.LOGO_W154
                    ) as string
                  }
                />
              ))}
            </>
          )}
        </ImageList>
      </Box>
    </Container>
  )
}
