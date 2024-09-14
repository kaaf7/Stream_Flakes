import { BaseTextFieldProps, TextField } from "@mui/material"

import { ChangeEvent } from "react"

interface FormField extends BaseTextFieldProps {
  id: string

  onChange(event: ChangeEvent<HTMLInputElement>): void
}

export const createFormFields = (formFields: FormField[]) => {
  return formFields.map((formField) => <TextField key={formField.id} {...formField} />)
}
