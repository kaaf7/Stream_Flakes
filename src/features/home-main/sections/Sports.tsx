import { Slider } from "@/components/ui/multi-slider/Slider"
import { useTranslation } from "react-i18next"

interface SportsProps {
  isLoading: boolean
}
export const Sports = ({ isLoading }: SportsProps) => {
  const { t } = useTranslation(["common"])
  return (
    <Slider
      needsTitle={true}
      title={t("Sports")}
      deskTopDisplayItems={6}
      isLoading={isLoading}
      cardSkeletonHeight="14rem"
      marginLeft={1}
      marginRight={1}
    />
  )
}
