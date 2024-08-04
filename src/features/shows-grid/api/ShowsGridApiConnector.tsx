import { MainColor, ToolTipPlacement } from "@/constants/constants"

import dummyData from "@/api/dummyData.json"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { FilterArray } from "@/components/ui/filter-array"
import { ShowsFilter } from "@/features/shows-filter"
import { ShowsGrid } from "@/features/shows-grid"
import { TuneOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const ShowsGridApiConnector = () => {
  const { t } = useTranslation(["common"])

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { FilterDrawer, onFilterDelete, filter, onSubmit, isSubmitted, onFilterDeleteAll } =
    ShowsFilter({
      isFilterOPen: isFilterOpen,
      setFilterOpen: setFilterOpen
    })

  const toggleFilterDrawer =
    (isFilterOPen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }
      setFilterOpen(isFilterOPen)
    }

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  return (
    <main style={{ width: "85%", display: "flex", flexDirection: "column", gap: 10 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "2rem"
        }}>
        <FilterArray
          filter={filter}
          onFilterDelete={onFilterDelete}
          onFilterDeleteAll={onFilterDeleteAll}
        />

        <CustomIconButton
          toolTipProps={{ title: t("filter"), placement: ToolTipPlacement.LEFT }}
          onClick={toggleFilterDrawer(true)}>
          <TuneOutlined color={MainColor.PRIMARY} />
        </CustomIconButton>
        {FilterDrawer}
      </Box>
      <ShowsGrid isLoading={isLoading} medias={dummyData} />
    </main>
  )
}
