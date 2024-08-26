import { Box, ImageList } from "@mui/material";

import { GidSkeleton } from "@/components/ui/grid-skeleton";
import { MediaCardUpdated } from "@/components/ui/media-card-updated";
import { createMediaPath } from "@/constants/constants";
import { useResponsive } from "@/hooks/responsive/useResponsive";
import { MediaCardProps } from "@/interfaces/MediaCardProps";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { useNavigate } from "react-router-dom";

interface MediaGridProps {
  medias: MediaCardProps[] | null
  needsMediaCardBar?: boolean
  isLoading: boolean
  currentPage:number
}

export const MediaGrid = ({ medias, needsMediaCardBar, isLoading,currentPage }: MediaGridProps) => {
  const { mobile, tablet } = useResponsive()
  const navigate = useNavigate()

  if (!isLoading && medias?.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "50vh",
          display:"flex",
          justifyContent: "center",
          alignItems: "center"
        }}><SentimentDissatisfiedIcon color={"disabled"} sx={{width:"5rem", height:"5rem"}} fontSize={"large"}/> </Box>
    )
  }
  return (
    <ImageList
      gap={10}
      cols={mobile ? 2 : tablet ? 3 : 6}
      sx={{
        height: "auto",
        boxSizing: "border-box",
        overflow: "hidden",
        flexWrap: "wrap"
      }}>
      {isLoading && currentPage === 0 ? (
        <GidSkeleton gridLength={30} />
      ) : (
        medias?.map((media: MediaCardProps, index) => (
          <MediaCardUpdated
            onClick={() => navigate(createMediaPath("mediaid"))}
            key={index}
            alt={media.title}
            id={media.id}
            needsMediaCardBar={needsMediaCardBar}
            isFavorite={media.isFavorite}
            imageUrl={media.poster_path as string}
          />
        ))
      )}
      {isLoading && currentPage > 0 && <GidSkeleton gridLength={30} />}
    </ImageList>
  )
}
