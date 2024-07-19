import { TextField, TextFieldProps } from "@mui/material"

import { ChangeEvent } from "react"

interface FormField extends TextFieldProps {
  id: string
  name: string
  value: string
  label?: string
  placeholder?: string
  ariaPlaceHolder?: string
  type: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}
export const createFormFields = (forrmFields: FormField[]) => {
  return forrmFields.map((formField) => <TextField key={formField.id} {...formField} />)
}
