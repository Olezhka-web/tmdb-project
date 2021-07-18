import {combineReducers} from "redux";
import {genresReducer} from "./genres";
import {moviesReducer} from "./movies";
import {switchThemeReducer} from "./switchTheme";

export const reducer = combineReducers({
    moviesReducer,
    genresReducer,
    switchThemeReducer
});
