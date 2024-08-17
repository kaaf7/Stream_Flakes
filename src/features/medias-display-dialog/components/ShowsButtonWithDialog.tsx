import {
  ButtonVariant,
  MAIN_PATH,
  MainColor,
  SHOWS_PATH,
  ToolTipPlacement
} from "@/constants/constants"
import { Dialog, DialogActions, DialogContent, ImageList, ImageListItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { CustomButton } from "@/components/buttons/custom-button"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { DialogMediaCard } from "@/features/medias-display-dialog"
import { LocalMoviesOutlined } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

type DialogMedias = {
  id:string,
  imageUrl: string
  cols?: number
  rows?: number
}

interface ShowsButtonWithDialogProps {
  medias: DialogMedias[]
}
export const ShowsButtonWithDialog = ({ medias }: ShowsButtonWithDialogProps) => {
  const { t } = useTranslation(["common"])
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)

  const handleDialogState = () => {
    if (location.pathname.endsWith(MAIN_PATH)) {
      setDialogOpen(true)
    } else {
      navigate(SHOWS_PATH)
    }
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
            sx={{ width: "30rem", height: "30rem", overflowY: "hidden" }}
            variant="quilted"
            gap={5}
            cols={10}>
            {medias.map((media) => (
              <ImageListItem key={media.id} rows={media.rows ?? 1} cols={media.cols || 1}>
                <DialogMediaCard img={media.imageUrl} />
              </ImageListItem>
            ))}
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
