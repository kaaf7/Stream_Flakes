/* eslint-disable @typescript-eslint/no-explicit-any */
import { MediaApi } from "@/api/MediaApi"
import { useEffect, useState } from "react"

interface useFindMediaByTitleProps {
  imdbId: string
}

export const useFindMediaByImdbId = ({ imdbId }: useFindMediaByTitleProps) => {
  const mediaApi = new MediaApi()
  const [isLoading, setLoading] = useState<boolean>(true)

  const [response, setResponse] = useState<any>(null)
  const [refresh, setRefresh] = useState<boolean>(true)
  const [errors, setErrors] = useState<unknown>(null)
  const prefetch = () => setRefresh(true)
  useEffect(() => {
    prefetch()
  }, [imdbId])

  useEffect(() => {
    if (!refresh) {
      return
    }

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await mediaApi.findMediaByImdbId(imdbId)
        if (response && response.ok) {
          const data = await response.json()
          setResponse(data)
        }
      } catch (error) {
        console.error(error)
        setErrors(error)
      } finally {
        setLoading(false)
        setRefresh(false)
      }
    }
    fetchData()
  }, [refresh])

  return { isLoading, response, errors }
}
