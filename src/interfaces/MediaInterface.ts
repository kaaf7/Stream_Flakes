import { ImageListItemProps } from "@mui/material"

export interface MediaInterface extends ImageListItemProps {
  _id: string
  id: string
  imageUrl?: string
  isFavorite?: boolean
  needsMediaCardBar?: boolean
  adult?: boolean
  backdrop_path?: string
  budget?: number
  genres?: string
  homepage?: string
  imdb_id?: string
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  production_companies?: string
  production_countries?: string
  release_date?: string // Using string for ISO 8601 date format
  revenue?: number
  runtime?: number
  spoken_languages?: string
  status?: string
  tagline?: string
  title?: string
  vote_average?: number
  vote_count?: number
}
