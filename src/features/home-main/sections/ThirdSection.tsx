import { Divider, useTheme } from "@mui/material"

import { MoviesApiConnector } from "../api/MoviesApiConnector"
import { SeriesApiConnector } from "../api/SeriesApiConnector"
import { SportsApiConnector } from "../api/SportsApiConnector"
import { TrendingShowsApiConnector } from "../api/TrendingShowsApiConnector"

interface ThirdSectionProps {
  isLoading: boolean
}
export const ThirdSection = ({ isLoading }: ThirdSectionProps) => {
  const theme = useTheme()

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 30,
        alignItems: "center"
      }}>
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <MoviesApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />

      <SeriesApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <TrendingShowsApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <SportsApiConnector />
    </main>
  )
}
