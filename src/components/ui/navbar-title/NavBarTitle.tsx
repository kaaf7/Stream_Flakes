import { Typography, TypographyProps } from "@mui/material"
export const NavBarTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <Typography {...props} variant="body2">
      {children}
    </Typography>
  )
}
