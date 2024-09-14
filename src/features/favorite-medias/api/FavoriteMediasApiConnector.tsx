import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { FilterArray } from "@/components/ui/filter-array"
import { MediaGrid } from "@/components/ui/media-grid"
import { MainColor, ToolTipPlacement } from "@/constants/constants"
import { ShowsFilter } from "@/features/shows-filter"
import { useWindowScroll } from "@/hooks/window-scroll/useWindowScroll.ts"
import { TuneOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const FavoriteMediasApiConnector = () => {
  const { t } = useTranslation(["common"])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const { scrolled } = useWindowScroll()

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
    <Box style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3rem"
        }}>
        <FilterArray
          filter={filter}
          onFilterDelete={onFilterDelete}
          onFilterDeleteAll={onFilterDeleteAll}
        />
        <CustomIconButton
          sx={{
            position: scrolled ? "fixed" : "relative",
            zIndex: 100,
            right: { mobile: scrolled ? 0 : null, desktop: scrolled ? 100 : null },
            top: scrolled ? 100 : null,
            transition: "right .4s ease-in-out, position 0.4s ease-in-out"
          }}
          toolTipProps={{ title: t("filter"), placement: ToolTipPlacement.LEFT }}
          onClick={toggleFilterDrawer(true)}>
          <TuneOutlined color={MainColor.PRIMARY} />
        </CustomIconButton>
        {FilterDrawer}
      </Box>
      <MediaGrid isLoading={isLoading} medias={[]} />
    </Box>
  )
}
