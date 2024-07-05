import { Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material"

interface DisplayCardProps {
  title: string
  description: string
  image: string
  direction?: string
}

export const DisplayCard = ({ title, description, image, direction }: DisplayCardProps) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        height: "500px",
        width: "400px",
        position: "relative",
        background: theme.palette.background.paper,
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,.3), rgba(0,0,0,0))"

      }}>
      <CardMedia
        sx={{
          height: "350px",
          borderRadius: 1,
          position: "relative", 
          zIndex: 1
        }}
        component="img"
        alt="movie"
        image={image}
      />
      {direction == "left" ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100%",
            zIndex: 2,
            background: "linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,0))"
          }}
        />
      ) : direction === "right" ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100px",
            height: "100%",
            zIndex: 2,
            background: "linear-gradient(to left, rgba(0,0,0,.5), rgba(0,0,0,0))"
          }}
        />
      ) : null}

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          position: "relative", // Ensure CardContent has relative positioning
          zIndex: 3 // Set a higher z-index to ensure it's above gradient divs and CardMedia
        }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
