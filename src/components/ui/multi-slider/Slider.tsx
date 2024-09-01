import "react-multi-carousel/lib/styles.css"

import { Box, Grid, Typography } from "@mui/material"
import { CardSkeleton, CardSkeletonProps } from "../card-skeleton/CardSkeleton"

import { MediaCardProps } from "@/interfaces/MediaCardProps"
import Carousel from "react-multi-carousel"
import { MediaCardUpdated } from "../media-card-updated"

const dummyMedia = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
    title: "title"
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
    title: "title"
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    title: "title"
  },
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
    title: "title"
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
    title: "title"
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    title: "title"
  },
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
    title: "title"
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
    title: "title"
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    title: "title"
  },
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
    title: "title"
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    title: "title"
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
    title: "title"
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    title: "title"
  }
]

interface SliderProps extends CardSkeletonProps {
  medias: MediaCardProps[]
  needsTitle?: boolean
  title?: string
  deskTopDisplayItems?: number
  tabletDisplayItems?: number
  mobileDisplayItems?: number
  isLoading?: boolean
  autoPlay?: boolean
}

export const Slider = ({
  medias,
  needsTitle,
  title,
  deskTopDisplayItems,
  tabletDisplayItems,
  mobileDisplayItems,
  isLoading,
  autoPlay,
  ...cardSkeletonProps
}: SliderProps) => {
  const skeletonCards = Array.from({ length: deskTopDisplayItems as number }, (_, index) => (
    <CardSkeleton {...cardSkeletonProps} key={index} />
  ))

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: deskTopDisplayItems ?? 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: tabletDisplayItems ?? 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: mobileDisplayItems ?? 1,
      slidesToSlide: 1
    }
  }

  return (
    <Grid  sx={{ width: "75rem"}} >
      {needsTitle && (
        <Grid item xs={3}>
          <Box sx={{ height: "100%" }}>
            <Typography variant="body1" sx={{ height: "100%", color: "grey" }}>
              {title}
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item xs={needsTitle ? 10 : 12}>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(to left, rgba(17,17,17,1), rgba(0,0,0,0))"
          }}>
          <Carousel
            responsive={responsive}
            autoPlay={autoPlay}
            swipeable={!isLoading}
            draggable={!isLoading}
            showDots={false}
            infinite={!isLoading}
            partialVisible={false}
            autoPlaySpeed={5000}
            transitionDuration={2000}
            dotListClass="custom-dot-list-style">
            {isLoading
              ? skeletonCards
              : medias.map((media) => (
                  <MediaCardUpdated
                    sx={{ marginRight: 1, marginLeft: 1, borderRadius: "1rem" }}
                    key={media.id}
                    imageUrl={media.poster_path?.replace("original", "w154") as string}
                    title={media.title}
                    id={media.id}
                  />
                ))}
          </Carousel>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "5rem",
              height: "100%",
              background: "linear-gradient(to left, rgba(17,17,17,1), rgba(0,0,0,0))"
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "5rem",
              height: "100%",
              background: "linear-gradient(to right, rgba(17,17,17,1), rgba(0,0,0,0))"
            }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
