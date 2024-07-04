import { Grid, Typography, useTheme } from "@mui/material"

import { Link } from "react-router-dom"

interface Link {
  name: string
  to: string
}

interface FooterLinkProps {
  links: Link[]
}

export const FooterLinkSection = ({ links }: FooterLinkProps) => {
  const theme = useTheme()

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
      {linkChunks.map((chunk: Link[], idx: number) => (
        <Grid key={idx} item md={3}>
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
    </>
  )
}
