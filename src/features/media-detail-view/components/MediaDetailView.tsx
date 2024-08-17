import {
  MediaInfoDisplayApiConnector,
  SuggestedMoviesApiConnector,
  SuggestedSeriesApiConnector
} from "@/features/media-detail-view"

export const MediaDetailView = () => {
  return (
    <>
      <MediaInfoDisplayApiConnector />
      <SuggestedMoviesApiConnector />
      <SuggestedSeriesApiConnector />
    </>
  )
}
