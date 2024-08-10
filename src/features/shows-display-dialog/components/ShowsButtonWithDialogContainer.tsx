import { ShowsButtonWithDialog } from "@/features/shows-display-dialog"

const medias = [
    {
      imageUrl: "https://posters.movieposterdb.com/24_03/2024/22022452/l_inside-out-2-movie-poster_4b749fa4.jpg",
      id:"1",
      cols: 4,
      rows: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"2",
      cols: 4,
      rows: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"3",
      cols: 2
      
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"4",
      cols: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"5",
      cols: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"6",
      cols: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"7",
      cols: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"8",
      cols: 2
    },
    {
      imageUrl: "https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg",
      id:"9",
      cols: 2
    }
  ]
  

export const ShowsButtonWithDialogContainer = () => {
  return (
    <ShowsButtonWithDialog medias={medias}/>)
}
