import { Languages, TmdbImageSizes } from "@/constants/constants.ts"
import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const trendingFilterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: GenreInterface.COMEDY
}
export const ComedyGenreApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(trendingFilterState)
  const { mobile, tablet, laptop } = useResponsive()
  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_10
  })

  return (
    <MediaSlider
      cardCount={mobile ? 2 : tablet ? 2 : laptop ? 3 : 6}
      cardWidth={24.6}
      containerHeight={"40vh"}
      isLoading={isLoading}
      medias={medias}
      slideTimer={20000}
      imageSize={TmdbImageSizes.POSTER_ORIGINAL}
    />
  )
}
