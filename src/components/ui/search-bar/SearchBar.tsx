import { Container, InputAdornment, TextField, useTheme } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"

import { SearchResultsDisplay } from "@/components/ui/search-results-display"
import { Search } from "@mui/icons-material"

export const SearchBar = () => {
  const theme = useTheme()

  const [search, setSearch] = useState<string | null>(null)

  const [resultBoxVisible, setResultBoxVisible] = useState<boolean>(false)

  const handleFocus = () => {
    setResultBoxVisible(true)
  }
  const handleBlur = () => {
    setTimeout(() => setResultBoxVisible(false), 300)
  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setResultBoxVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <Container sx={{ position: "relative" }}>
      <TextField
        id="search-bar"
        name="search"
        variant="outlined"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
        value={search}
        placeholder={"Search"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: theme.palette.primary.main }} />
            </InputAdornment>
          )
        }}
        sx={{
          width: "650px",
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
          }
        }}
      />
      <SearchResultsDisplay resultBoxVisible={resultBoxVisible} />
    </Container>
  )
}
