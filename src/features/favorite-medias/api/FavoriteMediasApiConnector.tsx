import { MediaGrid } from "@/components/ui/media-grid"
import { useAuth } from "@/hooks/auth/useAuth.ts"
import { Box } from "@mui/material"

export const FavoriteMediasApiConnector = () => {
  const { user } = useAuth()

  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3rem"
        }}></Box>
      <MediaGrid isLoading={false} medias={user && user?.favorites} needsMediaCardBar={true} />
    </Box>
  )
}
