import { useFindMediaByImdbId } from "@/hooks/medias/useFindMediaByImdbId.ts"
import { useParams } from "react-router-dom"
import { MediaInfoDisplay } from "../components/MediaInfoDisplay"

export const MediaInfoDisplayApiConnector = () => {
  const { imdbId } = useParams()
  const { isLoading, response } = useFindMediaByImdbId({ imdbId: imdbId as string })

  return <MediaInfoDisplay media={response && response[0]} isLoading={isLoading} />
}
