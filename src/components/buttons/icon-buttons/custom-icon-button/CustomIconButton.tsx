import { IconButton, IconButtonProps, Tooltip, TooltipProps } from "@mui/material"

import { ReactNode } from "react"

interface CustomTooltipProps extends Omit<TooltipProps, "children"> {}

interface CustomIconButtonProps extends IconButtonProps {
  toolTipProps?: CustomTooltipProps
  children: ReactNode
}

export const CustomIconButton = ({
  toolTipProps,
  children,
  ...iconButtonProps
}: CustomIconButtonProps) => {
  return (
    <Tooltip {...toolTipProps} title={toolTipProps?.title || ""}>
        <IconButton {...iconButtonProps}>{children}</IconButton>
    </Tooltip>
  )
}
