import { MediaSlider } from "@/components/ui/media-slider-carousel"
import { Languages } from "@/constants/constants.ts"
import { MediasFilterInterface } from "@/features/shows-filter"
import { getRandomGenre } from "@/helpers/getRandomGenre.ts"
import { useMedias } from "@/hooks/medias/useMedias"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const GENRE_LIST = [GenreInterface.THRILLER, GenreInterface.HORROR]

const filterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: getRandomGenre(GENRE_LIST)
}
export const ExploreRandomShowsApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(filterState)
  const { mobile, tablet, laptop } = useResponsive()

  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_10
  })
  return (
    <MediaSlider
      cardCount={mobile ? 1 : tablet ? 2 : laptop ? 3 : 9}
      containerHeight={mobile ? "60vh" : tablet ? "40vh" : laptop ? "60vh" : "72vh"}
      isLoading={isLoading}
      medias={medias}
      slideTimer={25000}
    />
  )
}
