import {
    AudioFileOutlined,
    CommentOutlined,
    PlayArrowOutlined,
    WatchOutlined
} from "@mui/icons-material"
import { Box, Grid, Typography, useTheme } from "@mui/material"

import { CustomButton } from "@/components/buttons/custom-button"
import { BaseContainer } from "@/components/ui/base-container"
import { Slider } from "@/components/ui/multi-slider/Slider"
import { useTranslation } from "react-i18next"

export const MediaDetailView = () => {
  return (
    <BaseContainer>
      <MediaInfoDisplay />
      <MediaCastDisplay />
      <MediaSuggestionSlider />
    </BaseContainer>
  )
}

const MediaCastDisplay = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "20rem"
      }}>
      <Grid item desktop={2}>
        <img src="" alt="" /> <Typography>Actor Name</Typography>
      </Grid>
      <Grid item desktop={2}>
        <img src="" alt="" /> <Typography>Actor Name</Typography>
      </Grid>
      <Grid item desktop={2}>
        <img src="" alt="" /> <Typography>Actor Name</Typography>
      </Grid>
      <Grid item desktop={2}>
        <img src="" alt="" /> <Typography>Actor Name</Typography>
      </Grid>
      <Grid item desktop={2}>
        <img src="" alt="" /> <Typography>Actor Name</Typography>
      </Grid>
      <Grid item desktop={2}>
        <img src="" alt="" /> <Typography>Actor Name</Typography>
      </Grid>
    </Grid>
  )
}

const MediaInfoDisplay = () => {
  const { t } = useTranslation(["common"])
  const theme = useTheme()
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
      }}
      container>
      <Grid
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1
        }}
        item
        desktop={6}
        laptop={6}>
        <Typography>Title</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row"
          }}>
          <Typography>Genre</Typography>
          <Box
            sx={{
              width: "2rem",
              height: "2rem",
              background: theme.palette.background.paper
            }}>
            <Typography>Rating</Typography>
          </Box>
          <Box
            sx={{
              width: "2rem",
              height: "2rem",
              background: theme.palette.background.paper
            }}>
            <Typography>Quality</Typography>
          </Box>
          <Typography>
            <WatchOutlined />
            Time
          </Typography>
          <Typography>
            <AudioFileOutlined />
            Language
          </Typography>
          <Typography>
            <CommentOutlined />
            Subtitles
          </Typography>
        </Box>
        <Box>
          <Typography>Movie Description</Typography>
        </Box>
      </Grid>
      <CustomButton>
        <PlayArrowOutlined />
        {t("playTrailer")}
      </CustomButton>
    </Grid>
  )
}

const MediaSuggestionSlider = () => {
  return (
    <Box>
      <Slider></Slider>
    </Box>
  )
}
