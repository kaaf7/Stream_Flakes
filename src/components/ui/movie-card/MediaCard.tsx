import { Favorite } from "@mui/icons-material"
import { Box, Button, CardActionArea, CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"

interface MediaCardProps {
  title: string
  imageUrl: string
}

export const MediaCard = ({ title, imageUrl }: MediaCardProps) => {
  return (
    <Card sx={{ width: 250, height: 250 }}>
      <Box sx={{ position: "relative", height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            loading="lazy"
            src={imageUrl}
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
  )
}
