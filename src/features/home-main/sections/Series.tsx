import { Slider } from "@/components/ui/multi-slider/Slider"

interface SeriesProps {
  isLoading: boolean
}
export const Series = ({isLoading}:SeriesProps) => {
  return (
    <Slider
      needsTitle={false}
      deskTopDisplayItems={6}
      cardSkeletonHeight="35vh"
      isLoading={isLoading}
      marginLeft={1}
      marginRight={1}
    />
  )
}
