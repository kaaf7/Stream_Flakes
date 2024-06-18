import { Favorite } from "@mui/icons-material"
import { Box, Button, CardActionArea, CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"

interface MovieCardProps {
  title: string
  imageUrl: string
  description: string
}

export const MovieCard = ({ title, imageUrl, description }: MovieCardProps) => {
  return (
    <Card sx={{ width: 250, height: 250 }}>
      <Box sx={{ position: "relative", height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            loading="lazy"
            image="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"
            alt={title}
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
  )
}
