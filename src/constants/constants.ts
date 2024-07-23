//** IDENTIFIER **/
export const USER_IDENTIFIER = ":userId"

//** PATHS **/
export const MAIN_PATH = "/"

export const USER_PATH = "/user"

export const LOGIN_PATH = "/login"

export const SIGN_UP_PATH = "/signup"

export const MEDIAS_PATH = "/medias"

export const SHOWS_PATH = "/shows"

export const SPORTS_PATH = "/sports"

export const FAVORITES_PATH = `shows/${USER_IDENTIFIER}/favorites`

export const SHARED_FAVORITES_PATH = "/favorites/shared"

/** PATH CREATOR **/
export const createFavoriteShowsPath = (userId: string) => {
  return FAVORITES_PATH.replace(USER_IDENTIFIER, userId)
}

/** SHOWS FILTERS **/
export const SHOWS_FILTER_BY_NAME = "name"
export const SHOWS_FILTER_BY_YEAR = "year"
export const SHOWS_FILTER_BY_GENRE = "genre"
