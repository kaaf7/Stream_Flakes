import {
  SHOWS_FILTER_BY_GENRE,
  SHOWS_FILTER_BY_NAME,
  SHOWS_FILTER_BY_YEAR
} from "@/constants/constants"
import { Box, Container, SwipeableDrawer } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

import { CustomButton } from "@/components/buttons/custom-button"
import { MediasFilterInterface } from "@/features/shows-filter"
import { createFormFields } from "@/utils/form-creator/createFormFields"
import { useTranslation } from "react-i18next"

interface ShowsFilterProps {
  setFilterOpen: Dispatch<SetStateAction<boolean>>
  isFilterOPen: boolean
}

export const ShowsFilter = ({ setFilterOpen, isFilterOPen }: ShowsFilterProps) => {
  const { t } = useTranslation(["common"])
  const [isSubmitted, setSubmit] = useState<boolean>(false)

  const [searchParams, setSearchParams] = useSearchParams()

  const [filter, setFilter] = useState<MediasFilterInterface>({
    name: searchParams.get(SHOWS_FILTER_BY_NAME),
    genre: searchParams.get(SHOWS_FILTER_BY_GENRE),
    year: searchParams.get(SHOWS_FILTER_BY_YEAR)
  })

  const [filterState, setFilterState] = useState<MediasFilterInterface>({})

  const onFilterDeleteAll = () => {
    updateFilter({})
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFilterState({ ...filterState, [name]: value })
  }

  const updateFilter = (formValues: MediasFilterInterface) => {
    const filterEmptyValues = Object.fromEntries(
      Object.entries(formValues).filter(([_, v]) => v !== null && v !== "" && v !== undefined)
    )
    setFilter(filterEmptyValues)
    setFilterState(filterEmptyValues)

    setSearchParams(filterEmptyValues as URLSearchParamsInit)
  }

  const onSubmit = (filter: MediasFilterInterface) => {
    updateFilter(filter)
    setFilterOpen((prevState) => !prevState)
  }

  const onFilterDelete = (key: keyof MediasFilterInterface) => {
    /*  updateFilter({
      ...filter,
      [key]: null
    }) */
    updateFilter(Object.fromEntries(Object.entries(filter).filter(([k]) => k !== key)))
  }

  const FILTER_FORM_FIELDS_ITEMS = [
    {
      id: t("form.filter.name"),
      name: "name",
      value: filterState.name ?? "",
      label: t("form.filter.name"),
      placeholder: t("form.filter.name"),
      autoComplete: "off",
      sx: { width: "100%" },
      onChange
    },
    {
      id: t("form.filter.genre"),
      name: "genre",
      value: filterState.genre ?? "",
      label: t("form.filter.genre"),
      placeholder: t("form.filter.genre"),
      autoComplete: "off",
      sx: { width: "100%" },
      onChange
    },
    {
      id: t("form.filter.year"),
      name: "year",
      value: filterState.year ?? "",
      label: t("form.filter.year"),
      placeholder: t("form.filter.year"),
      autoComplete: "off",
      sx: { width: "100%" },
      onChange
    }
  ]

  const FilterFormFileds = createFormFields(FILTER_FORM_FIELDS_ITEMS)

  return {
    FilterDrawer: (
      <SwipeableDrawer
        sx={{
          height:"100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "350px"
          }
        }}
        anchor="right"
        open={isFilterOPen}
        onOpen={()=>setFilterOpen(true)}
        onClose={() => setFilterOpen(false)}>
        <Container
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "1rem 1rem 1rem 1rem",
            gap: 5
          }}>
          <Box sx={{
            width:"100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5
          }}>{FilterFormFileds}</Box>
            <CustomButton
              variant="outlined"
              size="small"
              onClick={(e) => onSubmit(filterState)}
              sx={{ width: "100%"}}>
              submit
            </CustomButton>
        </Container>
      </SwipeableDrawer>
    ),
    filter: filter,
    onFilterDelete: onFilterDelete,
    onFilterDeleteAll: onFilterDeleteAll,
    onSubmit: onSubmit,
    isSubmitted: isSubmitted
  }
}
