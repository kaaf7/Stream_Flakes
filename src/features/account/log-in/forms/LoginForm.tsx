import movies from "@/assets/images/movies.jpg"
import { User } from "@/components/Auth/AuthProvider.tsx"
import { CustomButton } from "@/components/buttons/custom-button"
import { MAIN_PATH } from "@/constants/constants"
import { LoginFormValuesInterface } from "@/features/account"
import { formatResponse } from "@/helpers/formatResponse"
import { useAuth } from "@/hooks/auth/useAuth"
import { useLogin } from "@/hooks/auth/useLogin"
import { useLoadingBackdrop } from "@/hooks/back-drop/useLoadingBackdrop.tsx"
import { Box, Container, TextField, Typography, useTheme } from "@mui/material"
import { useSnackbar } from "notistack"
import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { Form, useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const { t } = useTranslation(["common"])
  const { showBackdrop, hideBackdrop, LoadingBackdrop } = useLoadingBackdrop()

  const theme = useTheme()
  const { enqueueSnackbar } = useSnackbar()

  const { setToken, setUser } = useAuth()
  const { submitLogin } = useLogin()

  const navigate = useNavigate()
  const [loginFormValues, setLoginFormValues] = useState<LoginFormValuesInterface>({
    username: "testuser",
    password: "admin"
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginFormValues({ ...loginFormValues, [name]: value })
  }

  const handleUserLogin = (user: User) => {
    const { accessToken, ...rest } = user
    localStorage.setItem("user", JSON.stringify(user))
    setUser({ ...rest } as User)
    setToken(accessToken)
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    showBackdrop()
    try {
      const res = await submitLogin(loginFormValues)
      const user = await formatResponse(res)
      if (user) {
        handleUserLogin(user)
        enqueueSnackbar(t("success.loginSuccessMessage"), { variant: "default" })
        setTimeout(() => {
          navigate(MAIN_PATH)
        }, 500)
      }
    } catch (error) {
      enqueueSnackbar(t("error.loginError"), { variant: "error" })
    } finally {
      hideBackdrop()
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: { mobile: "center", tablet: "center", desktop: "center" },
        alignItems: { mobile: "center", tablet: "space-between", desktop: "center" },
        overflow: "hidden"
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
              value={loginFormValues.username}
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
              variant="outlined"
              value={loginFormValues.password}
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
      <Box
        sx={{
          width: "100rem",
          minWidth: "100rem",
          height: "100vh",
          minHeight: "100vh",
          objectPosition: "center center",
          objectFit: "cover",
          position: "absolute",
          bottom: 0,
          filter: "blur(6px) brightness(15%)",
          transition: "width 0.6s ease-in-out"
        }}>
        <img
          src={movies}
          alt="Movies"
          loading="lazy"
          style={{
            width: "100%",
            minWidth: "100%"
          }}
        />
      </Box>

      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to right, rgba(17,17,17,1) 3%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to left, rgba(17,17,17,1) 2%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to top, rgba(17,17,17,1) 4%, rgba(0,0,0,0) 30%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      <LoadingBackdrop />
    </Box>
  )
}
