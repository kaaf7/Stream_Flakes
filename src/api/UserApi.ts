import { BaseApi } from "./BaseApi"

const BASE_URL = import.meta.env.VITE_BASE_URL

interface LoginInfo {
  username: string
  password: string
}

interface RegisterInfo {
  username: string
  password: string
}

interface FavoriteMediasBody {
  favorites: string[]
}
export class UserApi extends BaseApi {
  resgister = async (registerInfo: RegisterInfo) => {
    return await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(registerInfo)
    })
  }
  login = async (loginInfo: LoginInfo) => {
    return await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(loginInfo)
    })
  }

  upsertUserFavoriteMedias = async (userId: string, body: FavoriteMediasBody) => {
    return await fetch(`${BASE_URL}/user/${userId}/favorites/update`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body)
    })
  }
}
