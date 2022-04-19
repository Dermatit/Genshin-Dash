import { CHARACTER_CHECK, PAGE_DISPLAY } from './types';

const initialState = {
    characterCheck: '',
    styles : ['links', 'hide']
}

const characterCheck = (state = initialState, action) => {
    switch (action.type) {
        case CHARACTER_CHECK: return {
            ...state,
            characterCheck: action.payload
        }
        case PAGE_DISPLAY: return {
            ...state,
            styles: action.payload
        };
        default: return state;
    }
}
export const rootReducer = characterCheck;