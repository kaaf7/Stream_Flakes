import { Box, TextField } from "@mui/material"

export const LoginForm = () => {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
      }}>
      <Box>
        <TextField
          id="username"
          name="username"
          type="text"
          aria-label="username"
          aria-required="true"
          variant="outlined"
        />
        <TextField id="password" name="password" type="password" />
      </Box>
    </main>
  )
}
