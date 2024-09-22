import { Box, BoxProps, Container } from "@mui/material"

import { ReactNode } from "react"

interface BaseContainerProps extends BoxProps {
  children: ReactNode
}

export const BaseContainer = ({ children, ...containerProps }: BaseContainerProps) => {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        minWidth: "182px",
        justifyContent: "center",
        padding: "0 0 0 0"
      }}>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          gap: 5,
          justifySelf: "center",
          flexDirection: "column",
          ...containerProps
        }}>
        {children}
      </Box>
    </Container>
  )
}
