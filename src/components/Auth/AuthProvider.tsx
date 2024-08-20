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
  isLoggedIn:boolean
  accessToken: string | null
}

interface AuthContext {
  token: string
  setToken(token: string): void
  user: User | null

  setUser(user: User|null): void
}

export const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: (token: "") => {},
  user: null,
  setUser:(user:nukk)=>{}

})
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const storedInfo = localStorage.getItem("user")
  const [user, setUser] = useState<User | null>(storedInfo ? JSON.parse(storedInfo) : null)
  const [token, setToken] = useState<string>("")
console.log(user)
  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
