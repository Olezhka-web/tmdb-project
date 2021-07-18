import {
    CURRENT_PAGE, GET_GENRE,
    GET_GENRES,
    GET_MOVIES,
    LOADING_FALSE,
    LOADING_TRUE,
    SWITCH_THEME_FALSE,
    SWITCH_THEME_TRUE
} from "../actionTypes";

export const getMovies = (payload) => ({type: GET_MOVIES, payload});
export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const getGenres = (payload) => ({type: GET_GENRES, payload});
export const getGenre = (payload) => ({type: GET_GENRE, payload});
export const getCurrentPage = (payload) => ({type: CURRENT_PAGE, payload});
export const getSwitchThemeTrue = () => ({type: SWITCH_THEME_TRUE});
export const getSwitchThemeFalse = () => ({type: SWITCH_THEME_FALSE});
