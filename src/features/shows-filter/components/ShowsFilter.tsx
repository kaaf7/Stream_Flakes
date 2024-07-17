import {
  SHOWS_FILTER_BY_GENRE,
  SHOWS_FILTER_BY_NAME,
  SHOWS_FILTER_BY_YEAR
} from "@/constants/constants"
import { Container, Drawer } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

import { CustomButton } from "@/components/buttons/custom-button"
import { ShowsFilterInterface } from "@/features/shows-filter"
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

  const [filter, setFilter] = useState<ShowsFilterInterface>({
    name: searchParams.get(SHOWS_FILTER_BY_NAME),
    genre: searchParams.get(SHOWS_FILTER_BY_GENRE),
    year: searchParams.get(SHOWS_FILTER_BY_YEAR)
  })

  const [filterState, setFilterState] = useState<ShowsFilterInterface>({})

  const onFilterDeleteAll = () => {
    updateFilter({})
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFilterState({ ...filterState, [name]: value })
  }

  const updateFilter = (formValues: ShowsFilterInterface) => {
    const filterEmptyValues = Object.fromEntries(
      Object.entries(formValues).filter(([_, v]) => v !== null && v !== "" && v !== undefined)
    )
    setFilter(filterEmptyValues)
    setFilterState(filterEmptyValues)

    setSearchParams(filterEmptyValues as URLSearchParamsInit)
  }

  const onSubmit = (filter: ShowsFilterInterface) => {
    updateFilter(filter)
    setFilterOpen((prevState) => !prevState)
  }

  const onFilterDelete = (key: keyof ShowsFilterInterface) => {
   /*  updateFilter({
      ...filter,
      [key]: null
    }) */
     updateFilter( Object.fromEntries(Object.entries(filter).filter(([k]) => k !== key)))
  }


  const FORM_FIELDS = [
    {
      id: t("main.filter.name"),
      name: "name",
      value: filterState.name ?? "",
      label: t("main.filter.name"),
      placeholder: t("main.filter.name"),
      ariaPlaceHolder: t("main.filter.name"),
      onChange
    },
    {
      id: t("main.filter.genre"),
      name: "genre",
      value: filterState.genre ?? "",
      label: t("main.filter.genre"),
      placeholder: t("main.filter.genre"),
      ariaPlaceHolder: t("main.filter.genre"),
      onChange
    },
    {
      id: t("main.filter.year"),
      name: "year",
      value: filterState.year ?? "",
      label: t("main.filter.year"),
      placeholder: t("main.filter.year"),
      ariaPlaceHolder: t("main.filter.year"),
      onChange
    }
  ]

  const FilterFormFileds = createFormFields(FORM_FIELDS)

  return {
    FilterDrawer: (
      <Drawer
        sx={{
          width: "40rem",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "400px"
          }
        }}
        anchor="right"
        open={isFilterOPen}
        onClose={() => setFilterOpen(false)}>
        <Container
          sx={{
            height: "100%",
            padding: "1rem 1rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5
          }}>
          {FilterFormFileds}
          <CustomButton
            variant="outlined"
            onClick={(e) => onSubmit(filterState)}
            sx={{ width: "100%", height: "3rem" }}>
            submit
          </CustomButton>
        </Container>
      </Drawer>
    ),
    filter: filter,
    onFilterDelete: onFilterDelete,
    onFilterDeleteAll: onFilterDeleteAll,
    onSubmit: onSubmit,
    isSubmitted: isSubmitted
  }
}
