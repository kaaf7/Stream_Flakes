import { CustomIconButton } from "@/components/buttons/icon-buttons/custom-icon-button"
import { FilterArray } from "@/components/ui/filter-array"
import { ShowsFilter } from "@/features/shows-filter"
import { ShowsGrid } from "@/features/shows-grid"
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined"
import { Box } from "@mui/material"
import { useState } from "react"

const dummyMedias = [
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_04/2024/6263850/l_deadpool-wolverine-movie-poster_269f8e79.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_03/2024/22022452/l_inside-out-2-movie-poster_4b749fa4.jpg",
    id: "http://www.impawards.com/2024/posters/abigail.jpg"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl: "https://i.ebayimg.com/images/g/UEkAAOSwjdliRZJx/s-l1600.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_07/2024/22408160/l_kinds-of-kindness-movie-poster_cf63eeed.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_05/2024/17505010/l_horizon-an-american-saga-chapter-1-movie-poster_bd914ba0.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_05/2024/13433802/l_a-quiet-place-day-one-movie-poster_a978381b.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_02/2024/7510222/l_despicable-me-4-movie-poster_3c4ff16e.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl: "https://posters.movieposterdb.com/07_12/1975/72730/l_72730_10285664.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_07/2021/10919420/l_squid-game-movie-poster_390dd677.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_03/2024/22022452/l_inside-out-2-movie-poster_4b749fa4.jpg",
    id: "http://www.impawards.com/2024/posters/abigail.jpg"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  },
  {
    title: "",
    imageUrl:
      "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
    id: "https://static.wikia.nocookie.net/ironman/images/d/da/P170620_v_v8_ba.jpg/revision/latest?cb=20191202183622"
  }
]

export const ShowsGridApiConnector = () => {
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


    setTimeout(()=>{
      setIsLoading(false)
    },1000)

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
        
        <CustomIconButton onClick={toggleFilterDrawer(true)}>
          <FilterAltOutlinedIcon />
        </CustomIconButton>
        {FilterDrawer}
      </Box>
      <ShowsGrid isLoading={isLoading} medias={dummyMedias} />
    </main>
  )
}
