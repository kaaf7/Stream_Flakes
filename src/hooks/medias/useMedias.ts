/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { MediaApi } from "@/api/MediaApi"
import { MediasFilterInterface } from "@/features/shows-filter"

interface UseMediaProps {
    mediaFilterParams: MediasFilterInterface
    limit:number
}

export const useMedias = ({mediaFilterParams,limit}: UseMediaProps) => {
  const mediaApi = new MediaApi()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [response, setResponse] = useState<any>(null)
  const [refresh, setRefresh] = useState<boolean>(true)
  const [errors, setErrors] = useState<unknown>(null)
  const refetch = () => setRefresh(true)
  useEffect(() => {
    refetch()
  }, [mediaFilterParams,limit])

  useEffect(() => {
    if (!refresh) {
      return
    }

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await mediaApi.getMedias( mediaFilterParams,limit)
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
