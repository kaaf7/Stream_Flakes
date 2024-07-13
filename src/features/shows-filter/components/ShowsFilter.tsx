import React, { useState } from "react"
import {
  SHOWS_FILTER_BY_GENRE,
  SHOWS_FILTER_BY_NAME,
  SHOWS_FILTER_BY_YEAR
} from "@/constants/constants"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

import { Drawer } from "@mui/material"

interface ShowsFilterState {
  [key: string]: string | number | null
}

export const ShowsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)

  const [filter, setFilter] = useState<ShowsFilterState>({
    name: searchParams.get(SHOWS_FILTER_BY_NAME),
    genre: searchParams.get(SHOWS_FILTER_BY_GENRE),
    year: searchParams.get(SHOWS_FILTER_BY_YEAR)
  })

  const updateFilter = (filter: ShowsFilterState) => {
    const filterEmptyValues = Object.fromEntries(
      Object.entries(filter).filter(([_, v]) => v !== null && v !== "" && v !== undefined)
    )
    setFilter(filterEmptyValues)
    setSearchParams(filterEmptyValues as URLSearchParamsInit)
  }

  const onFilterDelete = (key: string) => {
    const updatedFilter = Object.fromEntries(Object.entries(filter).filter(([k]) => k !== key))
    updateFilter(updatedFilter)
  }

  const onFilterDeleteAll = () => {
    updateFilter({})
  }

  const toggleDrawer = (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setFilterOpen(newOpen)
  }

  const FilterDrawer = () => (
    <Drawer
      sx={{
        width: "400px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "400px"
        }
      }}
      anchor="right"
      open={isFilterOpen}
      onClose={toggleDrawer(false)}
      //onOpen={toggleDrawer(true)}
    ></Drawer>
  )

  return {
    filter,
    FilterDrawer,
    toggleDrawer,
    onFilterDelete,
    onFilterDeleteAll
  }
}
