import { useState } from "react"
import { Sports } from "../sections/Sports"

export const SportsApiConnector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 800)

  return <Sports  isLoading={isLoading} />
}
