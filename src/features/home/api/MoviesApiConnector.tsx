import { useState } from "react"
import { Movies } from "../sections/Movies"
export const MoviesApiConnector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1300)

  return <Movies isLoading={isLoading} />
}
