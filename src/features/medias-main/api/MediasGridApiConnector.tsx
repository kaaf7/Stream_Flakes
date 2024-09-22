import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { FilterArray } from "@/components/ui/filter-array"
import { MediaGrid } from "@/components/ui/media-grid"

import { MainColor, ToolTipPlacement } from "@/constants/constants"

import { ShowsFilter } from "@/features/shows-filter"

import { useInfiniteScroll } from "@/hooks/ifninite-scroll/useInfiniteScroll.ts"
import { useMedias } from "@/hooks/medias/useMedias"
import { useWindowScroll } from "@/hooks/window-scroll/useWindowScroll"

import { TuneOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

export const MediasGridApiConnector = () => {
  const { t } = useTranslation(["common"])

  const { currentPage } = useInfiniteScroll()

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const [limit, setLimit] = useState(18)

  const prevPageRef = useRef(currentPage)
  const { scrolled } = useWindowScroll()

  useEffect(() => {
    if (currentPage === prevPageRef.current + 1 && medias?.length !== 0) {
      setLimit((prevLimit) => prevLimit + 18)
    }
    prevPageRef.current = currentPage
  }, [currentPage])

  const { FilterDrawer, onFilterDelete, filter, onFilterDeleteAll } = ShowsFilter({
    isFilterOPen: isFilterOpen,
    setFilterOpen: setFilterOpen
  })

  const { isLoading, response: medias } = useMedias({
    mediaFilterParams: filter,
    limit: limit
  })
  const toggleFilterDrawer = (isFilterOPen: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setFilterOpen(isFilterOPen)
  }

  return (
    <Box style={{ display: "flex", width: "100%", flexDirection: "column", gap: 10 }}>
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
            right: {
              mobile: scrolled ? 0 : null,
              laptop: scrolled ? 100 : null,
              desktop: scrolled ? 100 : null
            },
            top: {
              mobile: scrolled ? 100 : null,
              laptop: scrolled ? 100 : null,
              desktop: scrolled ? 100 : null
            },
            transition: "right .4s ease-in-out, position 0.4s ease-in-out"
          }}
          toolTipProps={{ title: t("filter"), placement: ToolTipPlacement.LEFT }}
          onClick={toggleFilterDrawer(true)}>
          <TuneOutlined color={MainColor.PRIMARY} />
        </CustomIconButton>
        {FilterDrawer}
      </Box>
      <MediaGrid
        isLoading={isLoading}
        medias={medias}
        currentPage={currentPage}
        needsMediaCardBar={true}
      />
    </Box>
  )
}
