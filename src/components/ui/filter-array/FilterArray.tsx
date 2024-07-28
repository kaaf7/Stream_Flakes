import { ChipSize, ChipVariant } from "@/constants/constants"

import { Box } from "@mui/material"
import Chip from "@mui/material/Chip"
import { SyntheticEvent } from "react"
import { useTranslation } from "react-i18next"

interface FilterListProps {
  filter: object
  onFilterDelete(key: string): void
  onFilterDeleteAll(event: SyntheticEvent): void
}

const FilterArrayStyle = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
  justifyContent: "flex-start",
  gap: 1
}

export const FilterArray = ({ filter, onFilterDelete, onFilterDeleteAll }: FilterListProps) => {
  const {t} = useTranslation(["common"])

  const validFilterEntries = Object.entries(filter).filter(
    ([_, v]) => ["string", "number", "boolean"].includes(typeof v) && v !== ""
  )
  return (
    <Box sx={FilterArrayStyle}>
      {validFilterEntries.map(([k, v]) => (
        <Chip
          variant={ChipVariant.OUTLINED}
          size={ChipSize.SMALL}
          label={`${t(`form.filter.${k}`)}: ${v}`}
          onDelete={() => onFilterDelete(k)}
        />
      ))}
      {validFilterEntries.length > 0 && (
        <Chip
          variant={ChipVariant.OUTLINED}
          size={ChipSize.SMALL}
          label={t("deleteAllFilters")}
          onDelete={onFilterDeleteAll}
        />
      )}
    </Box>
  )
}
