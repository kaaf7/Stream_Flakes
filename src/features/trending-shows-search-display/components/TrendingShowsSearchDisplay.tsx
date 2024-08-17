import { Box, Container, Divider, ImageList, Typography, useTheme } from "@mui/material"

import { GidSkeleton } from "@/components/ui/grid-skeleton"
import { MediaCardUpdated } from "@/components/ui/media-card-updated"
import { MainColor } from "@/constants/constants"
import { Media } from "@/interfaces/Media"
import { memo } from "react"
import { useTranslation } from "react-i18next"

interface TrendingShowsSearchDisplayProps {
  isLoading: boolean
  medias: Media[]
}

export const TrendingShowsSearchDisplay = ({
  isLoading,
  medias
}: TrendingShowsSearchDisplayProps) => {
  const { t } = useTranslation(["common"])
  const theme = useTheme()
  const MemoizedGridSkeleton = memo(GidSkeleton)

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
            <MemoizedGridSkeleton gridLength={6} />
          ) : (
            <>
              {medias.slice(1,7).map((media) => (
                <MediaCardUpdated
                  key={media.id}
                  id={media.id}
                  needsMediaCardBar={false}
                  imageUrl={media.imageUrl}
                />
              ))}
            </>
          )}
        </ImageList>
      </Box>
    </Container>
  )
}
