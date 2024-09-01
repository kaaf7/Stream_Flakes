import { createContext, ReactNode, useEffect, useState } from "react"

interface User {
  id: string | null
  username: string | null
  email: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  favorites: any[] | null
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

  logOut(): void
}

export const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: () => {},
  user: null,
  setUser: () => {},
  logOut: () => {}
})
const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const storedUserInfo = localStorage.getItem("user")
  //const userData = storedUserInfo ? JSON.parse(storedUserInfo) : null
  // Handle retrieving user data from localStorage
  const savedUser = localStorage.getItem("user")
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (savedUser) {
      {
        const initialValue = JSON.parse(savedUser)
        setUser(initialValue)
      }
    }
  }, [savedUser])

  const logOut = () => {
    localStorage.removeItem("user")
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
