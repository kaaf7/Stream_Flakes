import { Languages } from "@/constants/constants.ts"
import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { getRandomGenre } from "@/helpers/getRandomGenre.ts"
import { useMedias } from "@/hooks/medias/useMedias"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const GENRE_LIST = [GenreInterface.MUSIC]
const filterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: getRandomGenre(GENRE_LIST)
}
export const RomanceGenreApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(filterState)
  const { mobile, tablet, laptop } = useResponsive()

  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_10
  })

  return (
    <MediaSlider
      cardCount={mobile ? 2 : tablet ? 2 : laptop ? 5 : 6}
      cardWidth={24.6}
      containerHeight={mobile ? "67vh" : tablet ? "40vh" : "40vh"}
      isLoading={isLoading}
      medias={medias}
      slideTimer={29000}
    />
  )
}
