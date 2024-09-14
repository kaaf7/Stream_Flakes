import { SearchResultOverview } from "@/components/ui/search-result-overview"
import { createMediaPath, MainColor } from "@/constants/constants"
import { useSearchMediaByTitle } from "@/hooks/medias/useSearchMediaByTitle.ts"
import { Search } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"
import { debounce } from "lodash"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const SearchBar = () => {
  const { t } = useTranslation(["common"])
  const [search, setSearch] = useState<string>("")
  const pastSearch = window.localStorage.getItem("search") as string

  const [titleQuery, setTitleQuery] = useState<string>(JSON.parse(pastSearch) ?? "superman")
  const [imdbId, setImdbId] = useState<null | string>(null)
  const navigete = useNavigate()

  const [resultBoxVisible, setResultBoxVisible] = useState<boolean>(false)
  const { isLoading, response } = useSearchMediaByTitle({ title: titleQuery })

  const debounceSearch = useCallback(
    debounce((val: string) => {
      setTitleQuery(val)
      window.localStorage.setItem("search", JSON.stringify(val))
    }, 300),
    []
  )

  useEffect(() => {
    if (search.length >= 3) {
      debounceSearch(search)
    }
  }, [search])
  const handleFocus = () => {
    setResultBoxVisible(true)
  }
  const handleBlur = (e: React.FocusEvent) => {
    if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
      setTimeout(() => setResultBoxVisible(false), 100)
    }
  }

  useEffect(() => {
    const navigateMovie = () => {
      if (imdbId) {
        navigete(createMediaPath(imdbId as string))
        window.scrollTo(0, 0)
        setImdbId(null)
      }
    }
    navigateMovie()
  }, [imdbId])
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
          display: { mobile: "none", tablet: "flex", desktop: "flex" },
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
      <SearchResultOverview
        resultBoxVisible={resultBoxVisible}
        isLoading={isLoading}
        medias={response}
        setImdbId={setImdbId}
      />
    </Box>
  )
}
