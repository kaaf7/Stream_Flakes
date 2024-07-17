import { Grid } from "@mui/material"
import { MediaCard } from "../movie-card"
interface IconCardProps {brandIcon:string}
export const  IconCard =({ brandIcon }:IconCardProps) =>{
    return (
      <Grid key={brandIcon} sm={1} item>
        <MediaCard
          sx={{
            width: "64px",
            height: "64px"
          }}
          key={brandIcon}
          imageUrl={brandIcon as string}
          title={brandIcon as string}
          id={brandIcon as string}
        />
      </Grid>
    )
  }