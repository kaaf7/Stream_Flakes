import { Languages } from "@/constants/constants.ts"
import { ShowsButtonWithDialog } from "@/features/medias-display-dialog"
import { MediasFilterInterface } from "@/features/shows-filter"
import { getRandomGenre } from "@/helpers/getRandomGenre.ts"
import { useMedias } from "@/hooks/medias/useMedias.ts"
import { GenreInterface, MediaResultLimit } from "@/interfaces/GenreInterface.ts"
import { useState } from "react"

const GENRE_LIST = [GenreInterface.THRILLER]

const filterState = {
  originalLanguage: Languages.ENGLISH,
  spokenLanguage: Languages.ENGLISH,
  genre: getRandomGenre(GENRE_LIST)
}
export const ShowsButtonWithDialogContainer = () => {
  const [filter] = useState<MediasFilterInterface>(filterState)

  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: MediaResultLimit.LIMIT_8
  })

  return <ShowsButtonWithDialog medias={medias} isLoading={isLoading} />
}
