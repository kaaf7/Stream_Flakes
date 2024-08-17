import { useState } from "react"
import { TrendingShows } from "../sections/TrendingShows"

export const TrendingShowsApiConnector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 800)

  return <TrendingShows  isLoading={isLoading} />
}
