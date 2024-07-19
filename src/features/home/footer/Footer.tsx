import { Box, Grid, Typography, useTheme } from "@mui/material"

import { FooterLinkSection } from "@/components/ui/footer-link"

export const Footer = () => {
  interface Link {
    name: string
    to: string
  }

  const CONTACT_AND_LEGAL_INFORMATION: Link[] = [
    { name: "Support Center", to: "/support" },
    { name: "Help Desk", to: "/help" },
    { name: "FAQ", to: "/faq" },
    { name: "Data Protection", to: "/data-protection" },
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms of Service", to: "/terms-of-service" },
    { name: "Cookies Settings", to: "/cookies-settings" },
    { name: "About Us", to: "/about" },
    { name: "Company Mission", to: "/mission" },
    { name: "Company History", to: "/history" },
    { name: "Values", to: "/values" },
    { name: "Social Media", to: "/social-media" },
    { name: "Newsletter Signup", to: "/newsletter" },
    { name: "Site Map", to: "/site-map" },
    { name: "Accessibility Statement", to: "/accessibility" },
    { name: "Terms of Use", to: "/terms-of-use" },
    { name: "Compliance Statements", to: "/compliance" },
    { name: "Copyright Information", to: "/copyright" },
    { name: "Trust Badges", to: "/trust-badges" },
    { name: "Language Selection", to: "/language-selection" }
  ]

  const theme = useTheme()
  return (
    <Box
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "inherit"
      }}>
      <Box sx={{ width: "85%", height: "100%", position: "relative" }}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            height: "100%",
            alignContent: "center",
            textAlign: "start",
            alignItems: "center"
          }}>
          <FooterLinkSection links={CONTACT_AND_LEGAL_INFORMATION} />
          <span
            style={{
              width: "100%",
              height: "10rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Typography variant="body2">
              © 2024 StreamFlakes - Your Portal to Endless Entertainment - All external content
              remains the property of the respective owner.
              <br />
              Impressum · Privacy Policy · Careers · Privacy Control Center
            </Typography>
          </span>
        </Grid>
      </Box>
    </Box>
  )
}
