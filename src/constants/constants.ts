//** IDENTIFIER **/
export const USER_IDENTIFIER = ":userId"

export const MEDIA_IDENTIFIER = ":mediaId"

//** PATHS **/
export const MAIN_PATH = "/"

export const USER_PATH = `users/${USER_IDENTIFIER}`

export const LOGIN_PATH = "login"

export const SIGN_UP_PATH = "/signup"

export const MEDIAS_PATH = "/medias"

export const SHOWS_PATH = "/shows"

export const SPORTS_PATH = "/sports"

export const FAVORITES_PATH = `/shows/${USER_IDENTIFIER}/favorites`

export const SHARED_FAVORITES_PATH = "/favorites/shared"

export const MEDIA_PATH = `/medias/${MEDIA_IDENTIFIER}`

/** PATH CREATOR **/
export const createFavoriteShowsPath = (userId: string) => {
  return FAVORITES_PATH.replace(USER_IDENTIFIER, userId)
}

export const createUserAccountPath = (userId: string) => {
  return USER_PATH.replace(USER_IDENTIFIER, userId)
}

export const createMediaPath = (mediaId: string) => {
  return MEDIA_PATH.replace(MEDIA_IDENTIFIER, mediaId)
}

/** SHOWS FILTERS **/
export const SHOWS_FILTER_BY_TITLE = "title"
export const SHOWS_FILTER_BY_MIN_YEAR = "minYear"
export const SHOWS_FILTER_BY_MAX_YEAR = "maxYear"
export const SHOWS_FILTER_BY_GENRE = "genre"

/** TOOL TIP PLACEMENT */
export enum ToolTipPlacement {
  TOP = "top",
  BOTTOM = "bottom",

  LEFT = "left",
  RIGHT = "right"
}

export enum MainColor {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDRY = "secondry",
  WARNING = "warning"
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export enum ButtonVariant {
  OUTLINED = "outlined",
  CONTAINED = "contained",
  TEXT = "text"
}

export enum ChipSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export enum ChipVariant {
  OUTLINED = "outlined",
  CONTAINED = "contained",
  TEXT = "text"
}

export enum TmdbImageSizes {
  /** BACKDROP SIZES **/
  /** LOGO SIZES **/
  LOGO_W154 = "w154",

  /** POSTER SIZES **/
  POSTER_W92 = "w92",
  POSTER_W185 = "w185",
  POSTER_W342 = "w342",
  POSTER_W500 = "w500",
  POSTER_W780 = "w780",
  POSTER_ORIGINAL = "original"
}

/** FOOTER LINKS **/

export enum Languages {
  ENGLISH = "en",
  SPANISH = "es",
  FRENCH = "fr",
  GERMAN = "de",
  ITALIAN = "it",
  PORTUGUESE = "pt",
  CHINESE = "zh",
  JAPANESE = "ja",
  KOREAN = "ko",
  RUSSIAN = "ru",
  ARABIC = "ar",
  HINDI = "hi",
  TURKISH = "tr",
  SWEDISH = "sv",
  DANISH = "da",
  NORWEGIAN = "no",
  FINNISH = "fi",
  POLISH = "pl",
  HUNGARIAN = "hu",
  CZECH = "cs",
  SLOVAK = "sk",
  ROMANIAN = "ro",
  BULGARIAN = "bg",
  GREEK = "el",
  THAI = "th",
  VIETNAMESE = "vi",
  INDONESIAN = "id",
  MALAY = "ms",
  FILIPINO = "tl"
}

// Footer Lins
export const SUPPORT_PATH = "/support"
export const HELP_DESK_PATH = "/help"
export const FAQ_PATH = "/faq"
export const DATA_PROTECTION_PATH = "/data-protection"
export const PRIVACY_POLICY_PATH = "/privacy-policy"
export const TERMS_OF_SERVICE_PATH = "/terms-of-service"
export const COOKIES_SETTINGS_PATH = "/cookies-settings"
export const COMPANY_MISSION_PATH = "/mission"
export const COMPANY_HISTORY_PATH = "/history"
export const ABOUT_US_PATH = "/about"
export const VALUES_PATH = "/values"
export const SOCIAL_MEDIA_PATH = "/social-media"
export const NEWSLETTER_SIGNUP_PATH = "/newsletter"
export const SITE_MAP_PATH = "/site-map"
export const ACCESSIBILITY_STATEMENT_PATH = "/accessibility"
export const TERMS_OF_USE_PATH = "/terms-of-use"
export const COMPLIANCE_STATEMENTS_PATH = "/compliance"
export const COPYRIGHT_INFORMATION_PATH = "/copyright"
export const TRUST_BADGES_PATH = "/trust-badges"
export const LANGUAGE_SELECTION_PATH = "/language-selection"
