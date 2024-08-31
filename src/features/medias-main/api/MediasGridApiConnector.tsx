import { MainColor, ToolTipPlacement } from "@/constants/constants"
import { useEffect, useRef, useState } from "react"

import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { FilterArray } from "@/components/ui/filter-array"
import { MediaGrid } from "@/components/ui/media-grid"
import { ShowsFilter } from "@/features/shows-filter"
import { useScrollPagination } from "@/hooks/ifninite-scroll/useScrollPagination"
import { useMedias } from "@/hooks/medias/useMedias"
import { useWindowScroll } from "@/hooks/windows-scroll/useWindowScroll"
import { TuneOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

export const MediasGridApiConnector = () => {
  const { t } = useTranslation(["common"])
  const { currentPage } = useScrollPagination()
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const [limit, setLimit] = useState(120)
  const prevPageRef = useRef(currentPage) 
  const { scrolled, setScrolled } = useWindowScroll()

  useEffect(() => {
    if (currentPage === prevPageRef.current + 1) {
      setLimit((prevLimit) => prevLimit + 60)
    }
    prevPageRef.current = currentPage
  }, [currentPage])

  const { FilterDrawer, onFilterDelete, filter, onSubmit, isSubmitted, onFilterDeleteAll } =
    ShowsFilter({
      isFilterOPen: isFilterOpen,
      setFilterOpen: setFilterOpen
    })

  useEffect(() => {})

  const {
    isLoading,
    response: medias,
    errors
  } = useMedias({ mediaFilterParams: filter, limit: limit })

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

  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Box
        sx={{
          display: "flex",
          width: "75rem",
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
            right: scrolled ? 70 : null,
            top:scrolled ? 70 : null,
            transition: "right .4s ease-in-out, position 0.4s ease-in-out"
          }}
          toolTipProps={{ title: t("filter"), placement: ToolTipPlacement.LEFT }}
          onClick={toggleFilterDrawer(true)}>
          <TuneOutlined color={MainColor.PRIMARY} />
        </CustomIconButton>
        {FilterDrawer}
      </Box>
      <MediaGrid isLoading={isLoading} medias={medias} currentPage={currentPage} />
    </Box>
  )
}
