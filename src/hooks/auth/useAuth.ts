import { AuthContext } from "@/components/Auth/AuthProvider"
import { useContext } from "react"

export const useAuth = () => {
  return useContext(AuthContext)
}
