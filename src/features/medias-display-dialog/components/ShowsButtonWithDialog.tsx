import { CustomButton } from "@/components/buttons/custom-button"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { GidSkeleton } from "@/components/ui/grid-skeleton"
import { MediaCard } from "@/components/ui/media-card"

import {
  ButtonVariant,
  createMediaPath,
  MAIN_PATH,
  MainColor,
  SHOWS_PATH,
  TmdbImageSizes,
  ToolTipPlacement
} from "@/constants/constants"

import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { MediaInterface } from "@/interfaces/MediaInterface.ts"
import { LocalMoviesOutlined } from "@mui/icons-material"
import { Dialog, DialogActions, DialogContent, ImageList, ImageListItem } from "@mui/material"
import { SyntheticEvent, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"

interface ShowsButtonWithDialogProps {
  isLoading: boolean
  medias: MediaInterface[]
}

export const ShowsButtonWithDialog = ({ isLoading, medias }: ShowsButtonWithDialogProps) => {
  const { t } = useTranslation(["common"])
  const navigate = useNavigate()
  const location = useLocation()
  const { mobile } = useResponsive()
  const { pathname } = location
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)

  const handleDialogState = () => {
    if (location.pathname.endsWith(MAIN_PATH) && !mobile) {
      setDialogOpen(true)
      return
    }
    navigate(SHOWS_PATH)
  }

  useEffect(() => {
    if (pathname.includes(SHOWS_PATH)) {
      setDialogOpen(false)
    }
  }, [pathname])

  return (
    <>
      <CustomIconButton
        toolTipProps={{ title: t("shows"), placement: ToolTipPlacement.BOTTOM }}
        onClick={handleDialogState}>
        <LocalMoviesOutlined color={MainColor.PRIMARY} />
      </CustomIconButton>

      <Dialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        sx={{ overflowY: "hidden", padding: 0 }}
        maxWidth="tablet">
        <DialogContent>
          <ImageList
            sx={{ width: "30rem", height: "25rem", overflowY: "hidden" }}
            variant="quilted"
            gap={5}
            cols={4}>
            {isLoading ? (
              <GidSkeleton gridLength={8} />
            ) : (
              medias?.map((media) => (
                <ImageListItem key={media?.id}>
                  <MediaCard
                    onClick={(event: SyntheticEvent) => {
                      event.preventDefault()
                      navigate(createMediaPath(media.imdb_id as string))
                    }}
                    id={media?.id}
                    imageUrl={
                      media?.poster_path?.replace(
                        TmdbImageSizes.POSTER_ORIGINAL,
                        TmdbImageSizes.POSTER_W342
                      ) as string as string
                    }
                  />
                </ImageListItem>
              ))
            )}
          </ImageList>
        </DialogContent>
        <DialogActions
          sx={{
            padding: "1rem",
            justifyContent: "center"
          }}>
          <CustomButton
            onClick={() => navigate(SHOWS_PATH)}
            sx={{ width: "100%" }}
            variant={ButtonVariant.OUTLINED}>
            {t("explore")}
          </CustomButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
