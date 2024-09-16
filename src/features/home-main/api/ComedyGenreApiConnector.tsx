import { MediaSlider } from "@/components/ui/media-slider-carousel"
import { Languages, TmdbImageSizes } from "@/constants/constants.ts"
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
      cardCount={mobile ? 1 : tablet ? 1 : laptop ? 2 : 3}
      portrait={false}
      containerHeight={mobile ? "60vh" : laptop ? "40vh" : "30vh"}
      isLoading={isLoading}
      medias={medias}
      slideTimer={20000}
      imageSize={TmdbImageSizes.POSTER_ORIGINAL}
    />
  )
}
