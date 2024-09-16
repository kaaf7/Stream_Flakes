import { LandingSection, ShowsSection } from "@/features/home-main"
import { useAuth } from "@/hooks/auth/useAuth.ts"
import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { Box, Grid } from "@mui/material"

export default function Home() {
  const { user } = useAuth()
  const { laptop, desktop } = useResponsive()

  return !user?.isLoggedIn ? (
    <>
      <LandingSection />
      <ShowsSection />
    </>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        marginTop: "5rem",
        gap: 1
      }}>
      <Box sx={{ width: "100%" }}></Box>
      {laptop ||
        (desktop && (
          <Box
            sx={{
              width: "100%",
              height: "3rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <Grid
              container
              sx={{
                flex: 1,
                gap: 1
              }}></Grid>
          </Box>
        ))}
      <ShowsSection />
    </Box>
  )
}
