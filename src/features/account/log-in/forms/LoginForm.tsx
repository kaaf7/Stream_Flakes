import { Box, Container, TextField, Typography, useTheme } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { Form, useNavigate } from "react-router-dom"

import movies from "@/assets/images/movies.jpg"
import { CustomButton } from "@/components/buttons/custom-button"
import { MAIN_PATH } from "@/constants/constants"
import { loginFormValues } from "@/features/account"
import { formatResponse } from "@/helpers/formatResponse"
import { useAuth } from "@/hooks/auth/useAuth"
import { useLogin } from "@/hooks/auth/useLogin"

export const LoginForm = () => {
  const theme = useTheme()

  const { setToken, setUser,user } = useAuth()
  const { submitLogin } = useLogin()


  const navigate = useNavigate()
  const [loginFormValues, setLoginFormValues] = useState<loginFormValues>({
    username: "null",
    password: "null"
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginFormValues({ ...loginFormValues, [name]: value })
  }
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await submitLogin(loginFormValues)
      const user = await formatResponse(res)
      if (user) {
        const { accessToken, ...rest } = user
        setUser({ ...rest })
        setToken(accessToken)
        if(user.isLoggedIn){
          navigate(MAIN_PATH)
        }
      }
    } catch (error) {
      console.error("Login failed:", error)
    }
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
        <Form onSubmit={handleLogin} style={{ gap: 1 }}>
          <Box
            sx={{
              width: "18rem",
              height: "20rem",
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
            <CustomButton type="submit" variant="outlined" sx={{ zIndex: 5, width: "90%" }}>
              Login
            </CustomButton>
            <Box sx={{ width: "90%", textAlign: "end" }}>
              <Typography variant="body2">
                <a href={MAIN_PATH}>Forgot Password?</a>
              </Typography>
            </Box>
          </Box>
        </Form>

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
            New to StreamFlakes?{" "}
            <a style={{ color: "#5069C8" }} href={MAIN_PATH}>
              Sign-Up
            </a>
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
