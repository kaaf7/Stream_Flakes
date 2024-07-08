import { Button, ButtonProps } from "@mui/material"

import { Link } from "react-router-dom"

interface CustomButtonProps extends ButtonProps {
  to?: string
}

export const CustomButton = ({ to, children, ...props }: CustomButtonProps) => {
  return (
    <Button to={to} component={Link}  {...props}>
      {children}
    </Button>
  )
}
