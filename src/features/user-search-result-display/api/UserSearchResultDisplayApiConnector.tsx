import medias from "@/api/dummyData.json"
import { UserSearchResultDisplay } from "@/features/user-search-result-display"
import { useState } from "react"

export const UserSearchResultDisplayApiConnector = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  
  return <UserSearchResultDisplay isLoading={isLoading} medias={medias} />
}
