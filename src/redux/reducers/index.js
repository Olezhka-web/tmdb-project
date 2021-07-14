import {combineReducers} from "redux";
import {genresReducer} from "./genres";
import {moviesReducer} from "./movies";

export const reducer = combineReducers({
    moviesReducer,
    genresReducer
});
