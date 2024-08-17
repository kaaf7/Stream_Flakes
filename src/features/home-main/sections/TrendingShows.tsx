import { Slider } from "@/components/ui/multi-slider/Slider"
import { useTranslation } from "react-i18next"
interface TrendingShowsProps {
  isLoading:boolean
}
export const TrendingShows = ({isLoading}:TrendingShowsProps) => {
  const {t} = useTranslation(["common"])
  return (
    <Slider
    title={t("Trending Shows")}
    needsTitle={true}
    deskTopDisplayItems={9}
    isLoading={isLoading}
    cardSkeletonHeight="9rem"
    marginLeft={1}
    marginRight={1}
  />
  )
}
