import {CURRENT_PAGE, GET_GENRES, GET_MOVIES, LOADING_FALSE, LOADING_TRUE} from "../actionTypes";

export const getMovies = (payload) => ({type: GET_MOVIES, payload});
export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const getGenres = (payload) => ({type: GET_GENRES, payload});
export const getCurrentPage = (payload) => ({type: CURRENT_PAGE, payload});
