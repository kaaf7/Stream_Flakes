import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre } from "@/interfaces/Genre"
import { useState } from "react"

const GENRE_LIST = [Genre.COMEDY, Genre.ACTION, Genre.DRAMA]

function getRandomGenre() {
  const randomIndex = Math.floor(Math.random() * GENRE_LIST.length)
  return GENRE_LIST[randomIndex]
}
const trendingFilterStat = {
  originalLnguage:"en",
  spokenLanguage:"en",
  genre: getRandomGenre()
}
export const TrendingShowsApiConnector = () => {
  const [filter, setFilter] = useState<MediasFilterInterface>(trendingFilterStat)

  const { isLoading, response: medias, errors } = useMedias({ mediaFilterParams: filter, limit: 50 })

  return <MediaSlider cardCount={10} cardWidth={7.1} cardHeight="25VH"  containerHeight="30vh" isLoading={isLoading} medias={medias}slideTimer={25000} />
}
