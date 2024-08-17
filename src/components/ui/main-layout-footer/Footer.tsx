import { Box, Grid, Typography } from "@mui/material"

import { FooterLinkSection } from "@/components/ui/footer-link"

export const Footer = () => {
  interface Link {
    name: string 
    to: string
  }

  const CONTACT_AND_LEGAL_INFORMATION: Link[] = [
    { name: "supportCenter", to: "/support" },
    { name: "helpDesk", to: "/help" },
    { name: "fAQ", to: "/faq" },
    { name: "dataProtection", to: "/data-protection" },
    { name: "privacyPolicy", to: "/privacy-policy" },
    { name: "termsOfService", to: "/terms-of-service" },
    { name: "cookiesSettings", to: "/cookies-settings" },
    { name: "aboutUs", to: "/about" },
    { name: "companyMission", to: "/mission" },
    { name: "companyHistory", to: "/history" },
    { name: "values", to: "/values" },
    { name: "socialMedia", to: "/social-media" },
    { name: "newsletterSignup", to: "/newsletter" },
    { name: "siteMap", to: "/site-map" },
    { name: "accessibilityStatement", to: "/accessibility" },
    { name: "termsOfUse", to: "/terms-of-use" },
    { name: "complianceStatements", to: "/compliance" },
    { name: "copyrightInformation", to: "/copyright" },
    { name: "trustBadges", to: "/trust-badges" },
    { name: "languageSelection", to: "/language-selection" }
  ]

  return (
    <Box
      style={{
        width: "100%",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Box sx={{ height: "100%", position: "relative"}}>
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
