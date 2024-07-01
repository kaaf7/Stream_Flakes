import { Divider, useTheme } from "@mui/material"

import { Slider } from "@/components/ui/multi-slider/Slider"

export const ThirdSection = () => {
    const theme = useTheme()
  return (
    <main
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
        alignItems: "center"
      }}>
      <Slider needsTitle={true} deskTopDisplayItems={6} />
      <Divider sx={{ width: "85%", marginX: 0.1, borderBottom: `1px solid ${theme.palette.background.paper}` }} />
      <Slider needsTitle={true} deskTopDisplayItems={3} />
      <Divider sx={{ width: "85%", marginX: 0.1, borderBottom: `1px solid ${theme.palette.background.paper}` }} />
      <Slider needsTitle={true} deskTopDisplayItems={4} />
    </main>
  )
}
