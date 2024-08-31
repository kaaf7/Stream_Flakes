import { Slider } from "@/components/ui/multi-slider/Slider"
import { MediasFilterInterface } from "@/features/shows-filter"
import { useMedias } from "@/hooks/medias/useMedias"
import { Genre } from "@/interfaces/Genre"
import { useState } from "react"
const trendingFilterStat = {
  minYear: "2020",
  maxYear: "2023",
  genre:Genre.ADVENTURE
}
export const SuggestedMoviesApiConnector = () => {
  const [filter, setFilter] = useState<MediasFilterInterface>(trendingFilterStat)

  const { isLoading, response: medias, errors } = useMedias({ mediaFilterParams: filter, limit: 6 })

  return (
    <Slider deskTopDisplayItems={6} medias={medias}/>

  )
}
