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
        gap: 25,
        alignItems: "center"
      }}>
      <Divider
        sx={{
          width: "85%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Slider needsTitle={false} deskTopDisplayItems={12} />
      <Divider
        sx={{
          width: "85%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Slider needsTitle={false} deskTopDisplayItems={4} />
      <Divider
        sx={{
          width: "85%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Slider needsTitle={true} deskTopDisplayItems={9} />
      <Divider
        sx={{
          width: "85%",
          marginX: 0.1,
          borderBottom: `1px solid ${theme.palette.background.paper}`
        }}
      />
      <Slider needsTitle={true} deskTopDisplayItems={6} />

   
   
    </main>
  )
}
