/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatResponse = async (res: any) => {
  if (res.ok) {
    return await res.json()
  }
  return null
}
