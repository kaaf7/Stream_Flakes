import { useResponsive } from "@/hooks/responsive/useResponsive.ts"
import { Box, Grid, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"

import { Link } from "react-router-dom"

interface Link {
  name: string
  to: string
}

interface FooterLinkProps {
  links: Link[]
}

export const FooterLinkSection = ({ links }: FooterLinkProps) => {
  const { t } = useTranslation(["common"])
  const theme = useTheme()
  const { desktop } = useResponsive()
  const chunkSize = 5

  const linkChunks = links.reduce((resultArray: Link[][], item: Link, index: number) => {
    const chunkIndex = Math.floor(index / chunkSize)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return (
    <>
      {linkChunks.map((chunk: Link[], index: number) => (
        <Grid
          item
          key={index}
          mobile={3}
          tablet={3}
          sx={{
            width: "100%",
            height: { mobile: "45vh", tablet: "30vh", desktop: "20vh" }
          }}>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              textAlign: "start",
              position: "relative",
              gap: 10,
              listStyleType: "none",
              padding: 0,
              margin: 0
            }}>
            {chunk.map((link: Link) => (
              <li key={link.to}>
                <Link to={link.to} style={{ textDecoration: "none" }}>
                  <Typography
                    variant={desktop ? "body2" : "caption"}
                    sx={{
                      cursor: "pointer",
                      color: theme.palette.primary.dark,
                      "&:hover": {
                        color: "inherit"
                      }
                    }}>
                    {link.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
      <Box
        sx={{
          width: "100%",
          height: { mobile: "20vh", tablet: "20vh", desktop: "20vh" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Typography variant={desktop ? "body2" : "caption"}>
          {t("footer.copyRights")}
          <br />
          {t("footer.impressum")}
        </Typography>
      </Box>
    </>
  )
}
