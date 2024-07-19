import { Card, useTheme } from "@mui/material"

interface SearchResultDisplayProps {
  resultBoxVisible: boolean
}

export const SearchResultsDisplay = ({ resultBoxVisible }: SearchResultDisplayProps) => {
  const theme = useTheme()
  return (
    <Card
      sx={{
        height: "25rem",
        width:"100%",
        flex:1,
        display:"flex",
        justifyContent: "center",
        background: theme.palette.background.default,
        position: "absolute",
        mt: 2,
        borderRadius: 1,
        opacity: resultBoxVisible ? 1 : 0,
        visibility: resultBoxVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease"
      }}
    />
  )
}
