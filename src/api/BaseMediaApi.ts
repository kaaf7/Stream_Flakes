const MEDIAS_RAPID_API_key = import.meta.env.VITE_MEDIAS_RAPID_API_key

export class BaseMediaApi {
  headers: Record<string, string>

  constructor() {
    this.headers = {
      "x-rapidapi-key": `${MEDIAS_RAPID_API_key}`
    }
  }
}
