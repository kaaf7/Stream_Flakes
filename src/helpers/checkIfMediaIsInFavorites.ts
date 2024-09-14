import { MediaInterface } from "@/interfaces/MediaInterface.ts"

export const checkIfMediaIsInFavorites = (
  favorites: MediaInterface[],
  media: MediaInterface
): MediaInterface[] => {
  const updatedFavorites = [...favorites]
  const mediaIndex = updatedFavorites.findIndex((fav) => fav.id === media.id)

  if (mediaIndex > -1) {
    updatedFavorites.splice(mediaIndex, 1)
  } else if (favorites.length <= 18) {
    updatedFavorites.push(media)
  }

  return updatedFavorites
}
