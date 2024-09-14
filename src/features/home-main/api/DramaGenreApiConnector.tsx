import { Languages } from "@/constants/constants.ts"
import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const trendingFilterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: GenreInterface.DRAMA
}
export const DramaGenreApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(trendingFilterState)
  const { mobile, tablet, laptop } = useResponsive()

  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_10
  })
  return (
    <MediaSlider
      cardCount={mobile ? 2 : tablet ? 3 : laptop ? 3 : 6}
      cardWidth={14.2}
      containerHeight={"40vh"}
      isLoading={isLoading}
      medias={medias}
      slideTimer={12000}
    />
  )
}
