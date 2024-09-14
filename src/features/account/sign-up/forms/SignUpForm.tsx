import movies from "@/assets/images/movies.jpg"
import { CustomButton } from "@/components/buttons/custom-button"
import { LOGIN_PATH } from "@/constants/constants"
import { SignUpFormValues } from "@/features/account"
import { Box, Container, TextField, Typography, useTheme } from "@mui/material"
import { ChangeEvent, useState } from "react"

export const SignUpForm = () => {
  const theme = useTheme()

  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormValues>({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSignUpFormValues({ ...signUpFormValues, [name]: value })
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
            sx={{ width: "90%", background: theme.palette.background.default }}
          />

          <CustomButton variant="outlined" sx={{ zIndex: 5, width: "90%" }}>
            Sign-Up
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
            Already Have an Account?
            <a style={{ color: "#5069C8" }} href={LOGIN_PATH}>
              {" "}
              Login
            </a>
          </Typography>
        </Box>
      </Container>
      <img
        src={movies}
        alt="Movies"
        loading="lazy"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "blur(2px) brightness(15%)"
        }}
      />

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
    </Box>
  )
}
