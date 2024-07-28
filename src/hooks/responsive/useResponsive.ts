import { useMediaQuery, useTheme } from "@mui/material"

export const useResponsive = () => {
  const theme = useTheme()

  const mobile = useMediaQuery(theme.breakpoints.between("mobile", "tablet"))
  const tablet = useMediaQuery(theme.breakpoints.between("tablet", "laptop"))
  const laptop = useMediaQuery(theme.breakpoints.between("laptop", "desktop"))
  const desktop = useMediaQuery(theme.breakpoints.up("desktop"))
  const largeDesltop = useMediaQuery(theme.breakpoints.up("desktop"))

  return { mobile, tablet,laptop,desktop,largeDesltop }
}
