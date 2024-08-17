import { Slider } from "@/components/ui/multi-slider/Slider"

interface MoviesProps {
  isLoading:boolean
}
export const Movies = ({isLoading}:MoviesProps) => {
  return (
    <Slider
      needsTitle={false}
      deskTopDisplayItems={12}
      cardSkeletonHeight="17vh"
      isLoading={isLoading}
      marginLeft={1}
      marginRight={1}
    />
  )
}
