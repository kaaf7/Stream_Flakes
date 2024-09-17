import movies from "@/assets/images/movies.jpg"
import { User } from "@/components/Auth/AuthProvider.tsx"
import { CustomButton } from "@/components/buttons/custom-button"
import { LOGIN_PATH, MAIN_PATH } from "@/constants/constants"
import { SignUpFormValues } from "@/features/account"
import { formatResponse } from "@/helpers/formatResponse.ts"
import { useAuth } from "@/hooks/auth/useAuth.ts"
import { useLogin } from "@/hooks/auth/useLogin.ts"
import { useSignUp } from "@/hooks/auth/useSignUp.ts"
import { useLoadingBackdrop } from "@/hooks/back-drop/useLoadingBackdrop.tsx"
import { Box, Container, TextField, Typography, useTheme } from "@mui/material"
import { useSnackbar } from "notistack"
import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { Form, useNavigate } from "react-router-dom"

export const SignUpForm = () => {
  const { t } = useTranslation(["common"])
  const navigate = useNavigate()

  const theme = useTheme()
  const [submit, setSubmit] = useState<boolean>(false)
  const { enqueueSnackbar } = useSnackbar()
  const { showBackdrop, hideBackdrop, LoadingBackdrop } = useLoadingBackdrop()
  const { setToken, setUser } = useAuth()

  const { submitSignUp } = useSignUp()
  const { submitLogin } = useLogin()

  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormValues>({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  })

  const handleUserLogin = (user: User) => {
    const { accessToken, ...rest } = user
    localStorage.setItem("user", JSON.stringify(user))
    setUser({ ...rest } as User)
    setToken(accessToken)
  }

  const handleLogin_ = async (
    event: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    event.preventDefault()
    showBackdrop()
    try {
      const res = await submitLogin({ username, password })
      const user = await formatResponse(res)
      if (user) {
        handleUserLogin(user)
        enqueueSnackbar(t("success.loginSuccessMessage"), { variant: "default" })
        navigate(MAIN_PATH)
      }
    } catch (error) {
      enqueueSnackbar(t("error.loginError"), { variant: "error" })
    } finally {
      hideBackdrop()
    }
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSignUpFormValues({ ...signUpFormValues, [name]: value })
  }
  const { username, email, password, confirmPassword } = signUpFormValues
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmit(true)

    if (!username || !email || !password || !confirmPassword) {
      return
    }

    if (password !== confirmPassword || password.length < 6) {
      enqueueSnackbar(t("error.confirmPasswordError"), { variant: "error" })
      return
    }

    if (!emailRegex.test(email)) {
      enqueueSnackbar(t("error.invalidEmailError"), { variant: "error" })
      return
    }

    try {
      showBackdrop()
      const res = await submitSignUp(signUpFormValues)

      if (!res.ok) {
        enqueueSnackbar(t("error.signUpError"), { variant: "error" })
        return
      }
      await handleLogin_(event, username, password)
    } catch (error) {
      enqueueSnackbar(t("error.signUpError"), { variant: "error" })
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
        <Typography variant="h6">Sign-Up to StreamFlakes</Typography>
        <Form onSubmit={handleSignUp} style={{ gap: 1 }}>
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
              value={signUpFormValues.username}
              error={submit && !signUpFormValues.username}
              sx={{ width: "90%", background: theme.palette.background.default }}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="text"
              size="small"
              aria-label="email"
              aria-required="true"
              variant="outlined"
              autoComplete="off"
              onChange={onChange}
              value={email}
              error={submit && !email}
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
              value={password}
              error={submit && !password}
              sx={{ width: "90%", background: theme.palette.background.default }}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              size="small"
              aria-label="confirmPassword"
              aria-required="true"
              autoComplete="off"
              onChange={onChange}
              value={confirmPassword}
              error={submit && !confirmPassword}
              sx={{ width: "90%", background: theme.palette.background.default }}
            />

            <CustomButton type="submit" variant="outlined" sx={{ zIndex: 5, width: "90%" }}>
              Sign-Up
            </CustomButton>
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
            Already Have an Account?
            <a style={{ color: "#5069C8" }} href={LOGIN_PATH}>
              {" "}
              Login
            </a>
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          minHeight: "100vh",
          objectFit: "cover",
          position: "absolute",
          filter: "blur(2px) brightness(15%)",
          transition: "width 0.6s ease-in-out"
        }}>
        <img
          src={movies}
          alt="Movies"
          loading="lazy"
          style={{
            width: "100%"
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
