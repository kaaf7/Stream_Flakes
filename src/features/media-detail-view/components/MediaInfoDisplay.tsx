import { CustomButton } from "@/components/buttons/custom-button"
import { MediaCard } from "@/components/ui/media-card"

import { createBackDropBack, MainColor, TmdbImageSizes } from "@/constants/constants.ts"
import { BRAND_ICONS } from "@/features/home-main"

import { checkIfMediaIsInFavorites } from "@/helpers/checkIfMediaIsInFavorites.ts"
import { formatResponse } from "@/helpers/formatResponse.ts"
import { updateLocalStorageUserFavorites } from "@/helpers/updateLocalStorageUserFavorites.ts"

import { useAuth } from "@/hooks/auth/useAuth.ts"
import { useLoadingBackdrop } from "@/hooks/back-drop/useLoadingBackdrop.tsx"
import { useUpsertFavoriteMedias } from "@/hooks/medias/useUpsertFavoriteMedias.ts"

import { MediaInterface } from "@/interfaces/MediaInterface.ts"
import {
  AccessTimeFilledOutlined,
  CommentOutlined,
  DateRange,
  EighteenUpRatingOutlined,
  FavoriteOutlined,
  FourKOutlined,
  PlayArrowOutlined,
  PublicOutlined
} from "@mui/icons-material"
import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material"
import Chip from "@mui/material/Chip"
import { useSnackbar } from "notistack"
import { SyntheticEvent } from "react"
import { useTranslation } from "react-i18next"

interface MediaInfoDisplayProps {
  isLoading: boolean
  media: MediaInterface
}

export const MediaInfoDisplay = ({ isLoading, media }: MediaInfoDisplayProps) => {
  const { upsertUserFavoriteMedias } = useUpsertFavoriteMedias()
  const { user, setUser } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation(["common"])

  const { showBackdrop, hideBackdrop, LoadingBackdrop } = useLoadingBackdrop()

  const onAddToFavorites = async (event: SyntheticEvent, media: MediaInterface) => {
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

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        height: { mobile: "50vh", tablet: "50vh", laptop: "50vh", desktop: "auto" }
      }}>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "1rem",
            zIndex: 0
          }}
        />
      ) : (
        <img
          src={createBackDropBack(media.backdrop_path as string).replace(
            TmdbImageSizes.POSTER_ORIGINAL,
            TmdbImageSizes.POSTER_W1280
          )}
          alt={media.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            filter: "blur(1px) brightness(25%)",
            zIndex: 0
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to right, rgba(17,17,17,1) 10%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to left, rgba(17,17,17,1) 1%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to top, rgba(17,17,17,1) 10%, rgba(0,0,0,0) 50%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      <Grid
        container
        direction={"column"}
        sx={{
          justifyContent: "center",
          justifyItems: "space-between",
          position: "relative"
        }}>
        <Grid item sx={{ zIndex: 100 }}>
          <Box
            sx={{
              width: "50%",
              height: "20rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
              zIndex: 100
            }}>
            {isLoading ? (
              <Skeleton
                variant="text"
                width="50%"
                height={50}
                sx={{
                  borderRadius: "1rem"
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2
                }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "900",
                    fontSize: "3rem",
                    letterSpacing: "normal",
                    color: "white"
                  }}>
                  {media?.original_title}
                </Typography>
              </Box>
            )}
            <Box sx={{ flex: 1 }}>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={20}
                  sx={{
                    borderRadius: "1rem"
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center"
                  }}>
                  <Typography>{media?.tagline}</Typography>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: "60rem",
                height: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                textAlign: "flex-end",
                alignContent: "flex-end",
                gap: 2
              }}>
              {isLoading ? (
                <Skeleton variant="text" width="30%" />
              ) : (
                <>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {media.genres?.split(",")[0]}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", display: "flex", gap: 1 }}>
                    <EighteenUpRatingOutlined fontSize={"small"} sx={{ color: "gray" }} />
                    {media.vote_average?.toPrecision(2)}
                  </Typography>
                  <FourKOutlined fontSize={"small"} sx={{ color: "gray" }} />

                  <Typography variant="body2" sx={{ color: "gray", display: "flex", gap: 1 }}>
                    <AccessTimeFilledOutlined fontSize={"small"} sx={{ color: "gray" }} />
                    {media.runtime}m
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", display: "flex", gap: 1 }}>
                    <PublicOutlined fontSize={"small"} sx={{ color: "gray" }} />
                    {media.original_language?.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", display: "flex", gap: 1 }}>
                    <CommentOutlined fontSize={"small"} sx={{ color: "gray" }} />
                    {media.spoken_languages?.split(", ").slice(0, 2).join(", ")}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", display: "flex", gap: 1 }}>
                    <DateRange fontSize={"small"} sx={{ color: "gray" }} />
                    {media.release_date?.split("-")[0]}
                  </Typography>
                </>
              )}
            </Box>
            <Box
              sx={{
                width: "60rem",
                height: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                textAlign: "flex-end",
                alignContent: "flex-end",
                gap: 2
              }}>
              {isLoading ? (
                <Skeleton variant="text" width="30%" />
              ) : (
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  {media?.production_companies
                    ?.split(",")
                    .slice(0, 3)
                    .map((company) => (
                      <Chip key={company} label={company} variant={"outlined"} size={"small"} />
                    ))}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: "60rem",
                height: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                textAlign: "flex-end",
                alignContent: "flex-end",
                gap: 2
              }}>
              {isLoading ? (
                <Skeleton variant="text" width="30%" />
              ) : (
                <Grid sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  {media?.production_countries
                    ?.split(",")
                    .slice(0, 2)
                    .map((country) => (
                      <Chip key={country} label={country} variant={"outlined"} size={"small"} />
                    ))}
                </Grid>
              )}
            </Box>
            <Box sx={{ height: "auto" }}>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={100}
                  sx={{
                    borderRadius: "1rem"
                  }}
                />
              ) : (
                <Typography variant={"body2"}>
                  {media?.overview?.split(" ").slice(1, 70).join(" ")}
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width={150}
                  height={50}
                  sx={{
                    borderRadius: "1rem"
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 3
                  }}>
                  <Box>
                    <CustomButton variant="outlined" href={media.homepage as string}>
                      <PlayArrowOutlined />
                      {t("checkMovie")}
                    </CustomButton>
                  </Box>
                  <Box>
                    {user?.isLoggedIn && (
                      <IconButton
                        aria-label="favorite"
                        onClick={(event) => onAddToFavorites(event, media)}
                        sx={{
                          backgroundColor: "rgba(125, 125, 125, 0.2)"
                        }}>
                        <FavoriteOutlined
                          color={
                            user?.favorites?.some((fav) => fav.id === media.id)
                              ? MainColor.WARNING
                              : MainColor.PRIMARY
                          }
                        />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2
              }}>
              <Grid>
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={100}
                    sx={{
                      borderRadius: "1rem"
                    }}
                  />
                ) : (
                  <Typography color="primary" variant="body1" sx={{ fontWeight: "bold" }}>
                    Streams on
                  </Typography>
                )}
              </Grid>
              <Grid container sx={{ flex: 1, gap: 1 }}>
                {isLoading
                  ? Array.from(new Array(6)).map((_, index) => (
                      <Skeleton
                        key={index}
                        variant="rectangular"
                        width={50}
                        height={50}
                        sx={{
                          borderRadius: "1rem"
                        }}
                      />
                    ))
                  : BRAND_ICONS.map((brandIcon) => (
                      <MediaCard
                        sx={{ width: "50px", height: "50px" }}
                        key={brandIcon}
                        imageUrl={brandIcon}
                        title={brandIcon}
                        id={brandIcon}
                      />
                    ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <LoadingBackdrop />
    </Box>
  )
}
