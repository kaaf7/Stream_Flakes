import { IconButton, IconButtonProps } from "@mui/material"
import { Share1Icon } from "@radix-ui/react-icons"
export const ShareIconButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <Share1Icon />
    </IconButton>
  )
}
