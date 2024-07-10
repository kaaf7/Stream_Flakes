import { Box } from "@mui/material"
import Chip from "@mui/material/Chip"
import { SyntheticEvent } from "react"

interface FilterListProps {
  filter: Record<string, string | number>
  onFilterDelete(event: SyntheticEvent): void
}

export const FilterList = ({ filter, onFilterDelete }: FilterListProps) => {
  return (
    <Box sx={{ width: "100%", flexDirection: "row", gap: 1, justifyContent: "flex-start" }}>
      {Object.entries(filter).map(([key, value]) => (
        <Chip
          variant="outlined"
          size="small"
          label={`${key}: ${value}`}
          onDelete={onFilterDelete}
        />
      ))}
    </Box>
  )
}
