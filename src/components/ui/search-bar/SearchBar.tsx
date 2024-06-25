import { Container, TextField } from "@mui/material"

export const SearchBar = () => {
  return (
    <Container>
      <TextField
        id="search-bar"
        placeholder="Search Films"
        variant="standard"
        sx={{
          width: "30rem",
          background: "inherit",
          transition: "width 0.3s ease-in-out",
          "&:focus-within": {
            width: "45rem"
          },
          "& .MuiInput-underline:before": {
            borderBottom: ".01rem solid", // Default border thickness
            transition: "border-bottom-width 0.2s"
          },
          "&:hover .MuiInput-underline:before": {
            borderBottom: ".01rem solid" // Hover border thickness
          },
          "& .MuiInput-underline:after": {
            borderBottom: ".01rem solid" // Thicker border on focus
          },
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "none",
              borderWidth: "0"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "none",
              borderWidth: "0"
            },
            borderRadius: ".5rem",
            height: "2rem"
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
    </Container>
  )
}
