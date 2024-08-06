import {
    ButtonVariant,
    MAIN_PATH,
    MainColor,
    SHOWS_PATH,
    ToolTipPlacement
} from "@/constants/constants"
import { Box, Dialog, DialogActions, DialogContent, ImageList, ImageListItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { CustomButton } from "@/components/buttons/custom-button"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { LocalMoviesOutlined } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

const itemData = [
  {
    img: "https://posters.movieposterdb.com/24_03/2024/22022452/l_inside-out-2-movie-poster_4b749fa4.jpg",
    title: "Breakfast",
    cols: 4,
    rows: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 4,
    rows: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  },
  {
    img: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    title: "Breakfast",
    cols: 2
  }
]
export const ShowsButtonWithDialog = () => {
  const { t } = useTranslation(["common"])
  const navigate = useNavigate()
  const location = useLocation()
  const {  pathname } = location
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)

  const handleNavigation = () => {
    navigate(SHOWS_PATH)
  }

  const handleDialogState = () => {
    if (pathname.endsWith(MAIN_PATH) ) {
      navigate(SHOWS_PATH)
    }
    setDialogOpen(true)
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
        sx={{ height: "100%", overflowY: "hidden", padding: 0 }}
        fullWidth
        maxWidth="tablet">
        <DialogContent>
          <ImageList
            sx={{ width: "100%", height: "100%", overflowY: "hidden" }}
            variant="quilted"
            gap={5}
            cols={10}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} rows={item.rows ?? 1} cols={item.cols || 1}>
                <DialogMediaCard img={item.img} />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
        <DialogActions
          sx={{
            padding: "20px ",
            justifyContent: "center"
          }}>
          <CustomButton
            onClick={handleNavigation}
            sx={{ width: "100%" }}
            variant={ButtonVariant.OUTLINED}>
            {t("explore")}
          </CustomButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

function DialogMediaCard({ img }: { img: string }) {
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
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hover ? 0.6 : 1,
          cursor: hover ? "pointer" : "default",
          transition: "opacity 0.5s ease-in-out"
        }}
        alt={img}
        loading="lazy"
      />
    </Box>
  )
}
