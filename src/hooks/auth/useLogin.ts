import { UserApi } from "@/api/UserApi";

export const useLogin = () => {
  const authApi = new UserApi(null)
  
  const submitLogin =  (loginInfo: { username: string|null; password: string|null }) => {
    return authApi.login(loginInfo)
  }

  return {submitLogin}
}
