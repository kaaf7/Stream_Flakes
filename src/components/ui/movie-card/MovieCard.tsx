import { Favorite } from "@mui/icons-material"
import { Button, CardActionArea, CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          onError={(event) => {}}
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="inherit">
            Title
          </Typography>
          <Typography variant="body2" color="inherit">
            Text
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button size="small" color="inherit" variant="text">
          Share
        </Button>
        <Favorite />
      </CardActions>
    </Card>
  )
}
