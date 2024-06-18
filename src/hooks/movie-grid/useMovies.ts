import { useEffect, useState } from "react"

type ResponseType= {
    ok:boolean
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<ResponseType|null>(null)
  const [error, setError] = useState<string|null>(null)
  const [refresh, setRefresh] = useState<boolean>(false)

  const refetch = () => setRefresh(true)

  useEffect(() => {}, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!refresh) {
        return
      }
      try {
        const response = await { ok: true }
        if (response && response.ok) {
          setIsLoading(false)
          setResponse(response)
        }
      } catch (error) {
        setError("")
      }
    }

    fetchData()
  }, [refetch])

  return { isLoading, error, refetch,response }
}
