import {
  ActionGenreApiConnector,
  DramaGenreApiConnector,
  SeriesApiConnector,
  TrendingShowsApiConnector
} from "@/features/home-main"
import { Divider, useTheme } from "@mui/material"

export const ThirdSection = () => {
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
      <DramaGenreApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <ActionGenreApiConnector />
      <Divider
        sx={{
          width: "100%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <SeriesApiConnector/>
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
    </main>
  )
}
