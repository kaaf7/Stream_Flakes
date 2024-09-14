import { ActionGenreApiConnector, TrendingShowsApiConnector } from "@/features/home-main"
import { MediaInfoDisplayApiConnector } from "@/features/media-detail-view"

export const MediaDetailView = () => {
  return (
    <>
      <MediaInfoDisplayApiConnector />
      <TrendingShowsApiConnector />
      <ActionGenreApiConnector />
    </>
  )
}
