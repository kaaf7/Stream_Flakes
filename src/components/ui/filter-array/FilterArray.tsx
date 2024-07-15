import { Box } from "@mui/material"
import Chip from "@mui/material/Chip"
import { SyntheticEvent } from "react"

interface FilterListProps {
  filter: object
  onFilterDelete(key: string): void
  onFilterDeleteAll(event: SyntheticEvent): void
}

export const FilterArray = ({ filter, onFilterDelete, onFilterDeleteAll }: FilterListProps) => {
  const validFilterEntries = Object.entries(filter).filter(
    ([_, v]) => ["string", "number", "boolean"].includes(typeof v) && v !== ""
  )
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        justifyContent: "flex-start",
        gap: 1
      }}>
      {validFilterEntries.map(([k, v]) => (
        <Chip
          variant="outlined"
          size="small"
          label={`${k}: ${v}`}
          onDelete={() => onFilterDelete(k)}
        />
      ))}
      {validFilterEntries.length > 0 ? (
        <Chip
          variant="outlined"
          size="small"
          label={"Delete All Filters"}
          onDelete={onFilterDeleteAll}
        />
      ) : null}
    </Box>
  )
}
