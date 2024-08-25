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
  favorites: any[]|null
  createdAt: Date|null
  updatedAt: Date|null
  isLoggedIn: boolean
  accessToken: string | null
}

interface AuthContext {
  token: string|null
  setToken(token: string|null): void
  user: User | null
  userData:User|null
  setUser(user: User | null): void
  logOut():void

}

export const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: (token: null) => {},
  user: null,
  userData:null,
  setUser: (user: null) => {},
  logOut:()=>{}
})
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const storedUserInfo = localStorage.getItem("user")
  const userData = storedUserInfo ? JSON.parse(storedUserInfo) : null
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string|null>(null)

   const logOut=()=>{
    localStorage.removeItem("user")
    setUser(null)
    setToken(null)
  
  }


  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser ,userData, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
