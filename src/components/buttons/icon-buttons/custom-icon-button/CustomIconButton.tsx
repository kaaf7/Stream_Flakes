import { IconButton, IconButtonProps } from "@mui/material"
import { ReactNode } from "react"

interface CustomIconButtonProps extends IconButtonProps {
  children: ReactNode
}

export const CustomIconButton = ({ children, ...props }: CustomIconButtonProps) => {
  return <IconButton {...props}>{children}</IconButton>
}
