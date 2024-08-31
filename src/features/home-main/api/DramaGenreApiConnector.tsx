import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre } from "@/interfaces/Genre"
import { useState } from "react"

const GENRE_LIST = [Genre.COMEDY, Genre.ACTION, Genre.DRAMA]

const trendingFilterStat = {
  originalLnguage:"en",
  spokenLanguage:"en",
  genre: Genre.DRAMA
}
export const DramaGenreApiConnector = () => {
  const [filter, setFilter] = useState<MediasFilterInterface>(trendingFilterStat)

  const { isLoading, response: medias, errors } = useMedias({ mediaFilterParams: filter, limit: 50 })
  return <MediaSlider cardCount={5} cardWidth={14.2} isLoading={isLoading} medias={medias} slideTimer={12000} />
}
