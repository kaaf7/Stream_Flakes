import { ImageList, Skeleton } from "@mui/material"

import { MediaCardUpdated } from "@/components/ui/media-card-updated"
import { useScrollPagination } from "@/hooks/ifninite-scroll/useScrollPagination"
import { useResponsive } from "@/hooks/responsive/useResponsive"
import { Media } from "@/interfaces/Media"
import { useMemo } from "react"

interface MediaGridProps {
  medias: Media[]
  isLoading: boolean
}


export const ShowsGrid = ({ medias, isLoading }: MediaGridProps) => {
  const { mobile,tablet } = useResponsive();
  const { currentPage } = useScrollPagination()

  const gridStyles = {
    gridTemplateColumns: mobile || tablet ? "repeat(2, 1fr) !important" : "repeat(6, 1fr) !important",
    width: "100%",
    height: "100%",
  };


  const skeletons = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => (
      <Skeleton
        key={index}
        variant="rectangular"
        sx={{
          width: "100%",
          //TODO change later
          height: mobile || tablet ? "15rem": "25rem",
          borderRadius: "1rem",
        }}
      />
    ));
  }, [mobile]);

  return (
    <ImageList gap={15} sx={gridStyles}>
      {isLoading && currentPage === 0
        ? skeletons
        : medias.map((media: Media,index:number) => (
            <MediaCardUpdated
              borderRadius={"1rem"}
              key={index}
              id={media.id}
              needsMediaCardBar={true}
              isFavorite={true}
              imageUrl={media.imageUrl}
            />
          ))}
      {isLoading && currentPage > 0 && skeletons}
    </ImageList>
  );
};
