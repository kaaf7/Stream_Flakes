import { Container, TextField } from "@mui/material"

export const SearchBar = () => {
  return (
    <Container>
      <TextField
        id="search-bar"
        label="Search Films"
        variant="outlined"
        sx={{
          width: "30rem",
          transition: "width 0.5s ease-in-out",
          "&:focus-within": {
            width: "40rem" 
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: ".05px"
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
