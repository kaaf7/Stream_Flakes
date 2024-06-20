import { Media } from "@/interfaces/Media"
import { Favorite } from "@mui/icons-material"
import { Box, Button, CardActionArea, CardMedia, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"

export const MediaCard = ({ title, imageUrl }: Media) => {
  return (
    <Grid item>
      <Card sx={{ width: 250, height: 250 }}>
        <Box sx={{ position: "relative", height: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              loading="lazy"
              image={imageUrl}
              alt={title}
              onError={(e) => {
                e.currentTarget.src = ""
              }}
            />
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              position: "absolute",
              width: "100%",
              justifyContent: "space-between",
              bottom: 0,
              left: 0,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)"
            }}>
            <Button size="small" color="inherit" variant="text">
              Share
            </Button>
            <Favorite />
          </CardActions>
        </Box>
      </Card>
    </Grid>
  )
}
