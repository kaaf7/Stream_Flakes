import { MainColor, ToolTipPlacement } from "@/constants/constants"
import { ShowsFilter } from "@/features/shows-filter"
import { ReactNode, useState } from "react"

import dummyData from "@/api/dummyData.json"
import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { FilterArray } from "@/components/ui/filter-array"
import { FavoritesGrid } from "@/features/favorite-shows-grid"
import { TuneOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

const FavoriteShowsApiConnectorStyle = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "2rem"
}
interface FavoriteShowsApiConnectorProps {
  children: ReactNode
}

export const FavoriteShowsApiConnector = ({ children }: FavoriteShowsApiConnectorProps) => {
  const { t } = useTranslation(["common"])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)

  const { FilterDrawer, onFilterDelete, filter, onFilterDeleteAll } = ShowsFilter({
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
      <Box sx={FavoriteShowsApiConnectorStyle}>
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
      {children}
      <FavoritesGrid isLoading={isLoading} medias={dummyData} />
    </main>
  )
}
