export const formatResponse = async (res: Response) => {
    if (res.ok) {
      return await res.json()
    }
    return null
  }