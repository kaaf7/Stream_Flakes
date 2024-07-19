import { LatestShows } from "@/features/home/sections/LatestShows"
import { useState } from "react"

export const LatestShowsApiConnector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 500)

  return <LatestShows isLoading={isLoading} data={"a"} />
}
