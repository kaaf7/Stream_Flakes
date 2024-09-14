import { ExploreShowsSearchDisplayApiConnector } from "@/features/explore-shows-search-display"

import { UserSearchResultDisplay } from "@/features/user-search-display"
import { MediaCardProps } from "@/interfaces/MediaCardProps.ts"
import { Card, useTheme } from "@mui/material"
import { ReactNode } from "react"

interface SearchResultDisplayProps {
  resultBoxVisible: boolean
  isLoading: boolean
  medias: MediaCardProps[]

  setImdbId(imdbId: string): void
}

export const SearchResultOverview = ({
  resultBoxVisible,
  isLoading,
  medias,
  setImdbId
}: SearchResultDisplayProps) => {
  return (
    <SearchResultOverviewContainer resultBoxVisible={resultBoxVisible}>
      <UserSearchResultDisplay isLoading={isLoading} medias={medias} setImdbId={setImdbId} />
      <ExploreShowsSearchDisplayApiConnector />
    </SearchResultOverviewContainer>
  )
}

function SearchResultOverviewContainer({
  resultBoxVisible,
  children
}: {
  resultBoxVisible: boolean
  children: ReactNode
}) {
  const theme = useTheme()

  return (
    <>
      {resultBoxVisible && (
        <Card
          sx={{
            width: "100%",
            height: "25rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            borderRadius: "1rem",
            backgroundColor: theme.palette.background.default,
            mt: 2
          }}>
          {children}
        </Card>
      )}
    </>
  )
}
