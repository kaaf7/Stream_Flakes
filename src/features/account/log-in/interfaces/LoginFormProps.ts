import { LoginFormValuesInterface } from "@/features/account"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface LoginFormProps {
  loginFormValues: LoginFormValuesInterface
  setLoginFormValues: Dispatch<SetStateAction<LoginFormValuesInterface>>

  onChange(event: ChangeEvent<HTMLTextAreaElement>): void
}
