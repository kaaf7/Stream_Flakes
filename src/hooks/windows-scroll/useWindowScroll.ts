import { useCallback, useEffect, useState } from "react"

import { debounce } from "@mui/material"

export const useWindowScroll = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(
    debounce(() => {
      setScrolled(window.scrollY > 10)
    }, 100),
    []
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return {scrolled,setScrolled}
}
