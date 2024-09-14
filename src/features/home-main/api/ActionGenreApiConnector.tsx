import { MediaSlider } from "@/components/ui/media-slider-carousel"
import { Languages } from "@/constants/constants.ts"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const trendingFilterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: GenreInterface.ACTION
}
export const ActionGenreApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(trendingFilterState)
  const { mobile, tablet, laptop, desktop } = useResponsive()
  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_10
  })
  return (
    <MediaSlider
      cardCount={mobile ? 2 : tablet ? 3 : laptop ? 3 : 6}
      cardWidth={desktop ? 25 : 14.2}
      containerHeight={"40vh"}
      isLoading={isLoading}
      medias={medias}
      slideTimer={15000}
    />
  )
}
