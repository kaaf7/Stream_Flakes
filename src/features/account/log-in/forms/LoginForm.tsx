import { Box, Container, TextField, Typography, useTheme } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { MAIN_PATH, SIGN_UP } from "@/constants/constants"

import { CustomButton } from "@/components/buttons/custom-button"
import { loginFormValues } from "@/features/account"
import movies from "@/assets/images/movies.jpg"

export const LoginForm = () => {
  const theme = useTheme()
  const [loginFormValues, setLoginFormValues] = useState<loginFormValues>({
    username: null,
    password: null
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginFormValues({ ...loginFormValues, [name]: value })
  }

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flex: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Container
        sx={{
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          gap: 2
        }}>
        <Typography variant="h6">Login to StreamFlakes</Typography>
        <Box
          sx={{
            width: "18rem",
            height: "18rem",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            border: ".1px solid grey",
            borderRadius: 2,
            gap: 2
          }}>
          <TextField
            id="username"
            name="username"
            label="Username"
            type="text"
            size="small"
            aria-label="username"
            aria-required="true"
            variant="outlined"
            autoComplete="off"
            onChange={onChange}
            sx={{ width: "90%", background: theme.palette.background.default }}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            size="small"
            aria-label="password"
            aria-required="true"
            autoComplete="off"
            onChange={onChange}
            sx={{ width: "90%", background: theme.palette.background.default }}
          />
          <Box sx={{ width: "90%", textAlign: "end" }}>
            <Typography variant="body2">
              <a href={MAIN_PATH}>Forgot Password?</a>
            </Typography>
          </Box>
          <CustomButton variant="outlined" sx={{ zIndex: 5, width: "90%" }}>
            Submit
          </CustomButton>
        </Box>
        <Box
          sx={{
            width: "18rem",
            height: "3rem",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            border: ".1px solid grey",
            borderRadius: 2,
            gap: 2
          }}>
          <Typography variant="body2">
            New to StreamFlakes? <a style={{color:"#5069C8"}} href={SIGN_UP}>Sign-Up</a>
          </Typography>
        </Box>
      </Container>
      <img
        src={movies}
        alt="Movies"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          filter: "blur(5px) brightness(20%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.2))",
          zIndex: 1
        }}
      />
    </main>
  )
}
