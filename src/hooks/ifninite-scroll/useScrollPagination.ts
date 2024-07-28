import { useEffect, useState } from "react"

export const useScrollPagination = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const checkIfBottomReached = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop +1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrentPage((prev) => prev + 1)
    }
  }
  useEffect(() => {
    const handleScroll = () => checkIfBottomReached()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return { currentPage }
}
