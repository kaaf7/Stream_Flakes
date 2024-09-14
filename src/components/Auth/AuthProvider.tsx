import { LOGIN_PATH } from "@/constants/constants.ts"
import { MediaInterface } from "@/interfaces/MediaInterface.ts"
import { createContext, ReactNode, useEffect, useState } from "react"
import { NavigateFunction } from "react-router-dom"

export interface User {
  id: string | null
  username: string | null
  email: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  favorites: MediaInterface[] | null
  createdAt: Date | null
  updatedAt: Date | null
  isLoggedIn: boolean
  accessToken: string | null
}

interface AuthContext {
  token: string | null
  user: User | null

  setToken(token: string | null): void

  setUser(user: User | null): void

  logOut(navigate: NavigateFunction): void
}

export const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: () => {},
  user: null,
  setUser: () => {},
  logOut: (navigate: NavigateFunction) => {}
})
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const savedUser = localStorage.getItem("user")
  const userData = savedUser ? JSON.parse(savedUser) : null

  const [user, setUser] = useState<User | null>(userData)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (savedUser) {
      {
        const initialValue = JSON.parse(savedUser)
        setUser(initialValue)
      }
    }
  }, [savedUser])

  const logOut = (navigate: NavigateFunction) => {
    localStorage.removeItem("user")
    setUser(null)
    setToken(null)
    navigate(LOGIN_PATH)
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
