//** IDENTIFIER **/
export const USER_IDENTIFIER = ":userId"

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

/** PATH CREATOR **/
export const createFavoriteShowsPath = (userId: string) => {
  return FAVORITES_PATH.replace(USER_IDENTIFIER, userId)
}

export const createUserAccountPath = (userId: string) => {
  return USER_PATH.replace(USER_IDENTIFIER, userId)
}

/** SHOWS FILTERS **/
export const SHOWS_FILTER_BY_NAME = "name"
export const SHOWS_FILTER_BY_YEAR = "year"
export const SHOWS_FILTER_BY_GENRE = "genre"

//** TOOL TIP PLACEMENT */

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