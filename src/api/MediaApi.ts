import { MediasFilterInterface } from "@/features/shows-filter"
import { serializeParams } from "@/helpers/serializeParams"
import { BaseMediaApi } from "./BaseMediaApi"

const MEDIAS_URL = import.meta.env.VITE_MEDIAS_URL

export class MediaApi extends BaseMediaApi {
  getMedias = async (filterParams: MediasFilterInterface, limit: number) => {
    const requestParams = serializeParams(limit, "Filter", filterParams)
    return fetch(`${MEDIAS_URL}/${requestParams}`, {
      method: "GET",
      headers: this.headers
    })
  }

  searchMediaByTitle = async (title: string) => {
    return fetch(`${MEDIAS_URL}/Search/${title}`, {
      method: "GET",
      headers: this.headers
    })
  }
  findMediaByImdbId = async (imdbId: string) => {
    return fetch(`${MEDIAS_URL}/FindByImbdId/${imdbId}`, {
      method: "GET",
      headers: this.headers
    })
  }
}
