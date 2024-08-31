import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre } from "@/interfaces/Genre"
import { useState } from "react"

const trendingFilterStat = {
  originalLnguage:"en",
  spokenLanguage:"en",
  genre: Genre.COMEDY
}
export const SeriesApiConnector = () => {

  const [filter, setFilter] = useState<MediasFilterInterface>(trendingFilterStat)

  const { isLoading, response: medias, errors } = useMedias({ mediaFilterParams: filter, limit: 50 })


  return <MediaSlider cardCount={3} cardWidth={24.6} cardHeight="75vh"  containerHeight="80vh" isLoading={isLoading} medias={medias} slideTimer={20000} />

}
