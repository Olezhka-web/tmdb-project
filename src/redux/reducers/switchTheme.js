import {SWITCH_THEME_FALSE, SWITCH_THEME_TRUE} from "../actionTypes";

const initialState = {
    switchTheme: 'Light'
};

export const switchThemeReducer = (state = initialState, action) =>{
    switch (action.type){
        case SWITCH_THEME_TRUE: {
            return {...state, switchTheme: 'Dark'};
        }
        case SWITCH_THEME_FALSE: {
            return {...state, switchTheme: 'Light'};
        }
        default: {
            return state;
        }
    }
}
