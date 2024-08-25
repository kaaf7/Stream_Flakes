import { UserApi } from "@/api/UserApi";

export const useLogin = () => {
  const authApi = new UserApi(null)
  
  const submitLogin =  (loginInfo: { username: string; password: string }) => {
    return authApi.login(loginInfo)
  }

  return {submitLogin}
}
