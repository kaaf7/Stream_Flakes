import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material"
import { useEffect, useRef, useState } from "react"

import { MediaCardProps } from "@/interfaces/Media"
import { Favorite } from "@mui/icons-material"

export const MediaCard = ({ id, imageUrl, needsMediaCardBar, ...rest }: MediaCardProps) => {
  const [hover, setHover] = useState<boolean>(false)

  const divRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target
          const src = div.getAttribute("data-src")
          div.classList.add("fade")
          observer.disconnect()
        }
      })
    })

    if (divRef.current) {
      observer.observe(divRef.current)
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current)
      }
    }
  }, [])
  return (
    <ImageListItem {...rest} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <img
        id={id}
        src={imageUrl}
        data-src={imageUrl}
        alt={"shows-images"}
        aria-label={"shows-images"}
        loading={"lazy"}
        style={{
          opacity: hover ? 0.5 : 1,
          cursor: hover ? "pointer" : "default",
          transition: ".5s ease-in-out",
          borderRadius: 5
        }}
      />
      {needsMediaCardBar && (
        <ImageListItemBar
          sx={{ background: "none" }}
          actionIcon={
            <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={"info"}>
              <Favorite />
            </IconButton>
          }></ImageListItemBar>
      )}
    </ImageListItem>
  )
}
