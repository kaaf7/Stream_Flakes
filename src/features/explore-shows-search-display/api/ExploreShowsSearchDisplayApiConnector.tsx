import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre, MediaResultLimit } from "@/interfaces/Genre"
import { useState } from "react"
import { Languages } from "@/constants/constants.ts"
import { getRandomGenre } from "@/helpers/getRandomGenre.ts"
import { ExploreShowsSearchDisplay } from "@/features/explore-shows-search-display"


const GENRE_LIST = [
  Genre.TV_MOVIE,
  Genre.THRILLER,
  Genre.HORROR,
  Genre.DOCUMENTARY,
  Genre.HISTORICAL,
  Genre.CRIME
]

const filterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: getRandomGenre(GENRE_LIST)
}
export const ExploreShowsSearchDisplayApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(filterState)

  const { isLoading, response: medias } = useMedias({ mediaFilterParams: filter,limit: MediaResultLimit.LIMIT_6 })
  return <ExploreShowsSearchDisplay medias={medias} isLoading={isLoading} />
}
