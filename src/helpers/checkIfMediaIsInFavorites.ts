import { MediaCardProps } from "@/interfaces/MediaCardProps.ts"

export const checkIfMediaIsInFavorites = (
  favorites: MediaCardProps[],
  media: MediaCardProps
): MediaCardProps[] => {
  const updatedFavorites = [...favorites]
  const mediaIndex = updatedFavorites.findIndex((fav) => fav.id === media.id)
  
  if (mediaIndex > -1) {
    updatedFavorites.splice(mediaIndex, 1)
  }

  if (favorites.length <= 18) {
    updatedFavorites.push(media)
  }

  return updatedFavorites
}
