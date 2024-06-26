import { Button, ButtonProps } from "@mui/material"
export const CustomButton = ({ children, title, ...props }: ButtonProps) => {
  return <Button {...props}>{title ?? children}</Button>
}
