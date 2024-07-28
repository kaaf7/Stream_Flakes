import { ImageList, Skeleton } from "@mui/material";

import { MediaCardUpdated } from "@/components/ui/media-card-updated/MediaCardUpdated";
import { useResponsive } from "@/hooks/responsive/useResponsive";
import Media from "@/interfaces/Media";
import { useMemo } from "react";

interface FavoritesGridProps {
  medias: Media[];
  currentPage: number;
  isLoading: boolean;
}

export const FavoritesGrid = ({ medias, currentPage, isLoading }: FavoritesGridProps) => {
  const { mobile } = useResponsive();

  const gridStyles = {
    gridTemplateColumns: mobile ? "repeat(2, 1fr) !important" : "repeat(6, 1fr) !important",
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
          height: mobile ? "25vh" : "40vh",
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
              imageUrl={media.imageUrl}
            />
          ))}
      {isLoading && currentPage > 0 && skeletons}
    </ImageList>
  );
};
