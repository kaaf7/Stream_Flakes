import { UserApi } from "@/api/UserApi"

export const useSignUp = () => {
  const authApi = new UserApi(null)

  const submitSignUp = (signUpInfo: { username: string; password: string; email: string }) => {
    return authApi.signUp(signUpInfo)
  }

  return { submitSignUp }
}
