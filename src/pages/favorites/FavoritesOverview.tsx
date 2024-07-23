import {
    SHOWS_FILTER_BY_GENRE,
    SHOWS_FILTER_BY_NAME,
    SHOWS_FILTER_BY_YEAR
} from "@/constants/constants"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

import { ShowsFilterInterface } from "@/features/shows-filter"
import { useState } from "react"

export default function FavoritesOverview() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [filter, setFilter] = useState<ShowsFilterInterface>({
    name: searchParams.get(SHOWS_FILTER_BY_NAME),
    genre: searchParams.get(SHOWS_FILTER_BY_GENRE),
    year: searchParams.get(SHOWS_FILTER_BY_YEAR)
  })

  const updateFilter = (filter: ShowsFilterInterface) => {
    setFilter(filter)
    setSearchParams(filter as URLSearchParamsInit)
  }

  const deleteAllFilters = (filter: ShowsFilterInterface) => {
    updateFilter({})
  }
  const deleteFilter = (key: string, value: string | number) => {
    const updatedFilter = Object.fromEntries(
      Object.entries(filter).filter(([k, v]) => k !== key && v != value)
    )
    updateFilter(updatedFilter)
  }

  return <></>
}
