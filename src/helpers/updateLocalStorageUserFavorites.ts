import { User } from "@/components/Auth/AuthProvider.tsx"
import { MediaInterface } from "@/interfaces/MediaInterface.ts"

export const updateLocalStorageUserFavorites = (
  updatedFavorites: MediaInterface[],
  setUser: (user: User) => void
) => {
  const existingUserData = JSON.parse(localStorage.getItem("user") || "{}")
  const updatedUserData = { ...existingUserData, favorites: updatedFavorites }
  localStorage.setItem("user", JSON.stringify(updatedUserData))
  setUser(updatedUserData)
}
