import { useState } from "react"
import { Series } from "../sections/Series"

export const SeriesApiConnector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1600)

  return <Series isLoading={isLoading} />
}
