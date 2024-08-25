import { useEffect, useState } from "react"

import { MediaApi } from "@/api/MediaApi"
import { MediasFilterInterface } from "@/features/shows-filter"
import { formatResponse } from "@/helpers/formatResponse"

export const useMedias = (mediaFilterParams: MediasFilterInterface) => {
  const mediaApi = new MediaApi()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [response, setResponse] = useState<unknown>(null)
  const [refresh, setRefresh] = useState<boolean>(true)
  const [errors, setErrors] = useState<unknown>(null)
  const refetch = () => setRefresh(true)

  useEffect(()=>{
    refetch()
  },[mediaFilterParams])

  useEffect(() => {
    if(!refresh){
        return
    }

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await mediaApi.getMedias(mediaFilterParams)
        if (response && response.ok) {
          setResponse(formatResponse(response))
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
