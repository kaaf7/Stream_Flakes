import { LandingSection, LatestShowsApiConnector, ThirdSection } from "@/features/home-main"

import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      <LandingSection />
      <LatestShowsApiConnector/>
      <ThirdSection />
    </>
  )
}
