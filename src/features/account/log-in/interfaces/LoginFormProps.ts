import { ChangeEvent, Dispatch, SetStateAction } from "react"

import { loginFormValues } from "@/features/account"

export interface LoginFormProps {
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void
  loginFormValues: loginFormValues
  setLoginFormValues: Dispatch<SetStateAction<loginFormValues>>
}
