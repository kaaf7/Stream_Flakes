import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre, MediaResultLimit } from "@/interfaces/Genre"
import { useState } from "react"
import { Languages } from "@/constants/constants.ts"
import { getRandomGenre } from "@/helpers/getRandomGenre.ts"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"

const GENRE_LIST = [
  Genre.THRILLER,
  Genre.HORROR,
]

const filterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: getRandomGenre(GENRE_LIST)
}
export const ExploreRandomShowsApiConnectors = () => {
  const [filter] = useState<MediasFilterInterface>(filterState)
  const { mobile } = useResponsive()

  const { isLoading, response: medias } = useMedias({ mediaFilterParams: filter,     limit: MediaResultLimit.LIMIT_50 })

  return (
    <MediaSlider
      cardCount={mobile?3:10}
      cardWidth={7.4}
      cardHeight="70vh"
      containerHeight="72vh"
      isLoading={isLoading}
      medias={medias}
      slideTimer={25000}
    />
  )
}
