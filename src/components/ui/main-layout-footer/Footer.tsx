import { FooterLinkSection } from "@/components/ui/footer-link"
import {
  ABOUT_US_PATH,
  ACCESSIBILITY_STATEMENT_PATH,
  COMPANY_HISTORY_PATH,
  COMPANY_MISSION_PATH,
  COMPLIANCE_STATEMENTS_PATH,
  COOKIES_SETTINGS_PATH,
  COPYRIGHT_INFORMATION_PATH,
  DATA_PROTECTION_PATH,
  FAQ_PATH,
  HELP_DESK_PATH,
  LANGUAGE_SELECTION_PATH,
  NEWSLETTER_SIGNUP_PATH,
  PRIVACY_POLICY_PATH,
  SITE_MAP_PATH,
  SOCIAL_MEDIA_PATH,
  SUPPORT_PATH,
  TERMS_OF_SERVICE_PATH,
  TERMS_OF_USE_PATH,
  TRUST_BADGES_PATH,
  VALUES_PATH
} from "@/constants/constants.ts"
import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation(["common"])

  interface Link {
    name: string
    to: string
  }

  const CONTACT_AND_LEGAL_INFORMATION: Link[] = [
    { name: t("footer.supportCenter"), to: SUPPORT_PATH },
    { name: t("footer.helpDesk"), to: HELP_DESK_PATH },
    { name: t("footer.faq"), to: FAQ_PATH },
    { name: t("footer.dataProtection"), to: DATA_PROTECTION_PATH },
    { name: t("footer.privacyPolicy"), to: PRIVACY_POLICY_PATH },
    { name: t("footer.termsOfService"), to: TERMS_OF_SERVICE_PATH },
    { name: t("footer.cookiesSettings"), to: COOKIES_SETTINGS_PATH },
    { name: t("footer.companyMission"), to: COMPANY_MISSION_PATH },
    { name: t("footer.companyHistory"), to: COMPANY_HISTORY_PATH },
    { name: t("footer.aboutUs"), to: ABOUT_US_PATH },
    { name: t("footer.values"), to: VALUES_PATH },
    { name: t("footer.socialMedia"), to: SOCIAL_MEDIA_PATH },
    { name: t("footer.newsletterSignup"), to: NEWSLETTER_SIGNUP_PATH },
    { name: t("footer.siteMap"), to: SITE_MAP_PATH },
    { name: t("footer.accessibilityStatement"), to: ACCESSIBILITY_STATEMENT_PATH },
    { name: t("footer.termsOfUse"), to: TERMS_OF_USE_PATH },
    { name: t("footer.complianceStatements"), to: COMPLIANCE_STATEMENTS_PATH },
    { name: t("footer.copyrightInformation"), to: COPYRIGHT_INFORMATION_PATH },
    { name: t("footer.trustBadges"), to: TRUST_BADGES_PATH },
    { name: t("footer.languageSelection"), to: LANGUAGE_SELECTION_PATH }
  ]

  return (
    <Box
      style={{
        width: "100%",
        height: "45vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
      <Box sx={{ height: "100%", position: "relative" }}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            height: "100%",
            alignContent: "center",
            textAlign: "start",
            paddingTop: 0,
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
              {t("footer.copyRights")}
              <br />
              {t("footer.impressum")}
            </Typography>
          </span>
        </Grid>
      </Box>
    </Box>
  )
}
