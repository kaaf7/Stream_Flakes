import { ReactNode, createContext, useState } from "react"

interface LoginInfo {
  username: string
  password: string
}

interface User {
  id: string | null
  username: string | null
  email: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  favorites: any[]
  createdAt: Date
  updatedAt: Date
  isLoggedIn: boolean
  accessToken: string | null
}

interface AuthContext {
  token: string
  setToken(token: string): void
  user: User | null
  setUser(user: User | null): void
  logout(): void
}

export const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: (token: "") => {},
  user: null,
  setUser: (user: nukk) => {},
  logout: () => {}
})
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const storedUserInfo = localStorage.getItem("user")
  const [user, setUser] = useState<User | null>(storedUserInfo ? JSON.parse(storedUserInfo) : null)
  const [token, setToken] = useState<string>("")

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setToken("")
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
