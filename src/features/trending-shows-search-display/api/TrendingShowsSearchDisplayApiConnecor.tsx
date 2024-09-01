import { MediasFilterInterface } from "@/features/shows-filter"
import { TrendingShowsSearchDisplay } from "@/features/trending-shows-search-display"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre } from "@/interfaces/Genre"
import { useState } from "react"

const GENRE_LIST = [Genre.COMEDY, Genre.ACTION, Genre.DRAMA]

function getRandomGenre() {
  const randomIndex = Math.floor(Math.random() * GENRE_LIST.length)
  return GENRE_LIST[randomIndex]
}
const trendingFilterStat = {
  minYear: "2020",
  maxYear: "2023",
  genre: getRandomGenre()
}
export const TrendingShowsSearchDisplayApiConnecor = () => {
  const [filter, setFilter] = useState<MediasFilterInterface>(trendingFilterStat)
  const { isLoading, response: medias, errors } = useMedias({ mediaFilterParams: filter, limit: 6 })
  return <TrendingShowsSearchDisplay medias={medias} isLoading={isLoading} />
}
