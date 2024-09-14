import fallbackImage from "@/assets/images/fallback.jpg"
import { MediaCardProps } from "@/interfaces/MediaCardProps.ts"
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"
import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  Typography,
  useTheme
} from "@mui/material"

interface UserSearchResultDisplayProps {
  medias: MediaCardProps[]
  isLoading: boolean

  setImdbId(imdbId: string): void
}

export const UserSearchResultDisplay = ({
  medias,
  isLoading,
  setImdbId
}: UserSearchResultDisplayProps) => {
  const theme = useTheme()

  if (medias?.length === 0 && !isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1
        }}>
        <SentimentDissatisfiedIcon
          color={"disabled"}
          sx={{ width: "5rem", height: "5rem" }}
          fontSize={"large"}
        />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1
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
          {medias?.map((media) => (
            <ImageListItem
              key={media?.id}
              onClick={() => setImdbId(media.imdb_id as string)}
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
                  src={media.poster_path}
                  alt={media.original_title}
                  loading={"lazy"}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = fallbackImage
                  }}
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
                  {media.original_title}
                </Typography>
                <Typography variant="body2">{media.release_date?.split("-")[0]}</Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  )
}
