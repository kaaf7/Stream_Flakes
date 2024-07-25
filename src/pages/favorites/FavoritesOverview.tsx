import {
  SHOWS_FILTER_BY_GENRE,
  SHOWS_FILTER_BY_NAME,
  SHOWS_FILTER_BY_YEAR
} from "@/constants/constants"
import { Box, Typography } from "@mui/material"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

import { CustomButton } from "@/components/buttons/custom-button"
import { FavoriteShowsApiConnector } from "@/features/favorite-shows-grid"
import { MoviesApiConnector } from "@/features/home"
import { ShowsFilterInterface } from "@/features/shows-filter"
import { useState } from "react"

export default function FavoritesOverview() {
  const [expand, setExpand] = useState<boolean>(false)
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
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      justifyItems: "center",
      marginTop: "10rem",
      gap: 2
    }}>
    <FavoriteShowsApiConnector>
      <Box
        sx={{
          width: "100%",
          height: expand ? "20rem" : "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: 2,
          position: "relative"
        }}>
        <Box
          sx={{
            width: "100%",
            height: expand ? "20rem" : "10rem",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, black, rgba(0, 0, 0, .1))",
              position: "absolute",
              top: 0,
              zIndex: 1
            }}
          />
          <Typography
            sx={{
              textAlign: "left",
              flex: 2,
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: expand ? "none" : 3,
              WebkitBoxOrient: "vertical",
            }}
            variant="body1"
            color= "primary" 

          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel,
          </Typography>
        </Box>
        {expand && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center"
            }}>
            <MoviesApiConnector />
          </Box>
        )}
        <CustomButton variant={"outlined"} onClick={() => setExpand(!expand)}>
          {expand ? "Show Less" : "Show More"}
        </CustomButton>
      </Box>
    </FavoriteShowsApiConnector>
  </Box>
)
}