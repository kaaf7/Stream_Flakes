/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserApi } from "@/api/UserApi.ts"
import { useAuth } from "@/hooks/auth/useAuth.ts"

export const useUpsertFavoriteMedias = () => {
  const { user } = useAuth()
  const userApi = new UserApi(user?.accessToken as string)

  const upsertUserFavoriteMedias = async (userId: string, favoriteMedias: any[]) => {
    return await userApi.upsertUserFavoriteMedias(userId, favoriteMedias)
  }

  return { upsertUserFavoriteMedias }
}
