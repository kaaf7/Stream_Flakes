import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  Typography,
  useTheme
} from "@mui/material"

import { Media } from "@/interfaces/Media"

interface UserSearchResultDisplayProps {
  medias: Media[]
  isLoading: boolean
}

export const UserSearchResultDisplay = ({ medias, isLoading }: UserSearchResultDisplayProps) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: "100%",
        height: "25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}>
      {isLoading ? (
        <CircularProgress thickness={1} />
      ) : (
        <ImageList
          variant="standard"
          sx={{
            width: "100%",
            height: "20rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "5px"
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent"
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "4px"
            },
            scrollbarWidth: "thin",
            scrollbarColor: `${theme.palette.primary.main} transparent`
          }}>
          {medias.slice(1, 10).map((media) => (
            <ImageListItem
              sx={{
                width: "100%",
                height: "5rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                alignContent: "flex-start",
                padding: "1rem 1rem 1rem 1rem",
                position: "relative",
                borderRadius: "1rem",
                gap: 1,
                "&:hover": {
                  backgroundColor: theme.palette.background.paper,
                  cursor: "pointer"
                }
              }}>
              <Box>
                <img
                  src={media.imageUrl}
                  alt={"search-images-display"}
                  loading={"lazy"}
                  style={{
                    width: "4rem",
                    height: "5rem",
                    objectFit: "cover"
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 1
                }}>
                <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                  Movie Title
                </Typography>
                <Typography variant="body2">Movie Year</Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  )
}
