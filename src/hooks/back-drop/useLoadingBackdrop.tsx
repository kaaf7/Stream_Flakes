import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import { useState } from "react"

export const useLoadingBackdrop = () => {
  const [loading, setLoading] = useState(false)

  const LoadingBackdrop = () => (
    <Backdrop sx={{ color: "inherit", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )

  const showBackdrop = () => setLoading(true)
  const hideBackdrop = () => setLoading(false)

  return { showBackdrop, hideBackdrop, LoadingBackdrop }
}
