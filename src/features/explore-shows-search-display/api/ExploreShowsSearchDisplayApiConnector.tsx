import { Languages } from "@/constants/constants.ts"
import { ExploreShowsSearchDisplay } from "@/features/explore-shows-search-display"
import { MediasFilterInterface } from "@/features/shows-filter"
import { getRandomGenre } from "@/helpers/getRandomGenre.ts"
import { useMedias } from "@/hooks/medias/useMedias"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const GENRE_LIST = [GenreInterface.THRILLER, GenreInterface.HORROR, GenreInterface.CRIME]

const filterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: getRandomGenre(GENRE_LIST)
}
export const ExploreShowsSearchDisplayApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(filterState)

  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_6
  })

  return <ExploreShowsSearchDisplay medias={medias} isLoading={isLoading} />
}
