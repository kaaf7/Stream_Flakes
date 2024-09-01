import { MediaSlider } from "@/features/home-main"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre, MediaResultLimit } from "@/interfaces/Genre"
import { useState } from "react"
import { Languages } from "@/constants/constants.ts"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"

const trendingFilterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: Genre.DRAMA
}
export const DramaGenreApiConnector = () => {
  const [filter] = useState<MediasFilterInterface>(trendingFilterState)
  const { mobile } = useResponsive()

  const { isLoading, response: medias } = useMedias({ mediaFilterParams: filter,     limit: MediaResultLimit.LIMIT_50})
  return (
    <MediaSlider
      cardCount={mobile?1:5}
      cardWidth={14.2}
      isLoading={isLoading}
      medias={medias}
      slideTimer={12000}
    />
  )
}
