import { Container, ContainerProps } from "@mui/material"

import { ReactNode } from "react"

interface BaseContainerProps extends ContainerProps {
  children: ReactNode
}
export const BaseContainer = ({ children, ...containerProps }: BaseContainerProps) => {
  return (
    <Container sx={{ width: "80%", height: "100%", margin: "0 0 0 0" }} {...containerProps}>
      {children}
    </Container>
  )
}
