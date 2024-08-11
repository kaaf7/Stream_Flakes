import { Card, useTheme } from "@mui/material"

import { TrendingShowsSearchDisplayApiConnecor } from "@/features/trending-shows-search-display"
import { UserSearchResultDisplayApiConnector } from "@/features/user-search-result-display"
import { ReactNode } from "react"

interface SearchResultDisplayProps {
  resultBoxVisible: boolean
}

export const SearchResultOverview = ({ resultBoxVisible }: SearchResultDisplayProps) => {

  return (
    <SearchResultOverviewContainer resultBoxVisible={resultBoxVisible}>
      <UserSearchResultDisplayApiConnector />
      <TrendingShowsSearchDisplayApiConnecor />
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
            flexDirection:"row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            borderRadius: "1rem",
            backgroundColor: theme.palette.background.default,
            mt: 2,

          }}>
          {children}
        </Card>
      )}
    </>
  )
}
