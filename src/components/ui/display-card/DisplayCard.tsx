import { Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material"

interface DisplayCardProps {
  title: string
  description: string
  image: string
}

export const DisplayCard = ({ title, description, image }: DisplayCardProps) => {
  const theme = useTheme()
  return (
    <Card
      sx={{
        height: "100%",
        flex: 1,
        padding: 1,
        background: theme.palette.background.default,
        backgroundImage:
          "linear-gradient(to top,rgba(155,155,155,.1), theme.palette.background.default)"
      }}>
      <CardMedia
        sx={{
          height: "70%"
        }}
        component="img"
        alt="movie"
        image={image}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center"
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
