import { UserApi } from "@/api/UserApi";

interface LoginInfo {
  username: string|null; password: string|null 
}

export const useLogin = () => {
  const authApi = new UserApi(null)
  
  const submitLogin =  (loginInfo:LoginInfo) => {
    return authApi.login(loginInfo)
  }

  return {submitLogin}
}
