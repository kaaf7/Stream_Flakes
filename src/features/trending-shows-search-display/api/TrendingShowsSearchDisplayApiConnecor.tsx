import medias from "@/api/dummyData.json"
import { TrendingShowsSearchDisplay } from "@/features/trending-shows-search-display"
import { useState } from "react"

export const TrendingShowsSearchDisplayApiConnecor = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  return <TrendingShowsSearchDisplay medias={medias.slice(1,7)} isLoading={isLoading} />
}
