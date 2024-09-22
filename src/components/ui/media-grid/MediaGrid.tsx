import { User } from "@/components/Auth/AuthProvider.tsx"
import { GidSkeleton } from "@/components/ui/grid-skeleton"
import { MediaCard } from "@/components/ui/media-card"
import { createMediaPath, TmdbImageSizes } from "@/constants/constants"
import { checkIfMediaIsInFavorites } from "@/helpers/checkIfMediaIsInFavorites.ts"
import { formatResponse } from "@/helpers/formatResponse.ts"
import { updateLocalStorageUserFavorites } from "@/helpers/updateLocalStorageUserFavorites.ts"
import { useAuth } from "@/hooks/auth/useAuth.ts"
import { useLoadingBackdrop } from "@/hooks/back-drop/useLoadingBackdrop.tsx"
import { useUpsertFavoriteMedias } from "@/hooks/medias/useUpsertFavoriteMedias.ts"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { MediaInterface } from "@/interfaces/MediaInterface.ts"
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"
import { Box, ImageList } from "@mui/material"
import { useSnackbar } from "notistack"
import { SyntheticEvent } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

interface MediaGridProps {
  medias: MediaInterface[] | null
  needsMediaCardBar?: boolean
  isLoading: boolean
  currentPage?: number
}

export const MediaGrid = ({
  medias,
  needsMediaCardBar,
  isLoading,
  currentPage
}: MediaGridProps) => {
  const { upsertUserFavoriteMedias } = useUpsertFavoriteMedias()
  const { user, setUser } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation(["common"])
  const { mobile, tablet } = useResponsive()
  const navigate = useNavigate()

  const { showBackdrop, hideBackdrop, LoadingBackdrop } = useLoadingBackdrop()

  const onAddToFavorite = async (event: SyntheticEvent, media: MediaInterface) => {
    event.preventDefault()
    try {
      showBackdrop()

      const { id: userId, favorites = [] } = user || {}
      const updatedFavorites = checkIfMediaIsInFavorites(favorites as MediaInterface[], media)
      const response = await upsertUserFavoriteMedias(userId as string, updatedFavorites)

      const { favorites: updatedServerFavorites } = await formatResponse(response)
      updateLocalStorageUserFavorites(updatedServerFavorites, setUser)
      enqueueSnackbar(t("success.successMessage"), { variant: "default" })
    } catch (error) {
      enqueueSnackbar(t("error.errorMessage"), { variant: "error" })
    } finally {
      hideBackdrop()
    }
  }

  if (!isLoading && medias?.length === 0) {
    return (
      <Box
        sx={{
          width: "80%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
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
    <>
      <ImageList
        gap={10}
        cols={mobile ? 2 : tablet ? 3 : 6}
        sx={{
          height: "auto",
          boxSizing: "border-box",
          overflow: "hidden",
          flexWrap: "wrap"
        }}>
        {isLoading && currentPage === 0 ? (
          <GidSkeleton gridLength={18} />
        ) : (
          medias?.map((media: MediaInterface) => (
            <MediaCard
              onClick={(event: SyntheticEvent) => {
                event.preventDefault()
                navigate(createMediaPath(media.imdb_id as string))
                window.scrollTo(0, 0)
              }}
              key={media.id}
              alt={media.title}
              id={media.id}
              onIconClick={(event) => onAddToFavorite(event, media)}
              needsMediaCardBar={needsMediaCardBar}
              user={user as User}
              isFavorite={user?.favorites?.some((fav) => fav.id === media.id)}
              imageUrl={
                (media.poster_path?.replace(
                  TmdbImageSizes.POSTER_ORIGINAL,
                  TmdbImageSizes.POSTER_W342
                ) as string) ?? ""
              }
            />
          ))
        )}
        {isLoading && (currentPage as number) > 0 && <GidSkeleton gridLength={30} />}
      </ImageList>
      <LoadingBackdrop />
    </>
  )
}
