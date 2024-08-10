import { Box, InputAdornment, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"

import { SearchResultOverview } from "@/components/ui/search-result-overview"
import { MainColor } from "@/constants/constants"
import { Search } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

export const SearchBar = () => {
  const { t } = useTranslation(["common"])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [search, setSearch] = useState<string | null>(null)

  const [resultBoxVisible, setResultBoxVisible] = useState<boolean>(false)

  const handleFocus = () => {
    setResultBoxVisible(true)
  }
  const handleBlur = () => {
    setTimeout(() => setResultBoxVisible(false), 100)
  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setResultBoxVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)


  return (
    <Box
      sx={{
        position: "relative",
        width: "20rem",
        justifyContent: "center",
        flex: 1
      }}>
      <TextField
        id="search-bar"
        name="search"
        placeholder={t("search")}
        variant="outlined"
        autoComplete="off"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
        value={search ?? ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: MainColor.PRIMARY }} />
            </InputAdornment>
          )
        }}
        sx={{
          width: "100%",
          background: "inherit",
          transition: "width 0.3s ease-in-out",
          "&:focus-within": {},
          "& .MuiInput-underline:before": {
            borderBottom: ".01rem solid",
            transition: "border-bottom-width 0.2s"
          },
          "&:hover .MuiInput-underline:before": {
            borderBottom: ".01rem solid"
          },
          "& .MuiInput-underline:after": {
            borderBottom: ".01rem solid"
          },
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "none",
              borderWidth: ".1px"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "none",
              borderWidth: ".1px"
            },
            height: "30px"
          },
          "& .MuiInputLabel-root": {
            transform: "translate(14px, .3rem) scale(1)",
            transition: "transform 0.2s",
            width: "100%"
          },
          "& .MuiInputLabel-shrink": {
            transform: "translate(14px, -6px) scale(0.75)"
          },
          zIndex: 100
        }}
      />
      <SearchResultOverview isLoading={isLoading} resultBoxVisible={resultBoxVisible} />
    </Box>
  )
}
