import { combineReducers } from 'redux';
import { CHARACTER_CHECK, PAGE_DISPLAY } from './types';

const initialState = {
    characterCheck: '',

    linkClass: 'links',
    mainInfo: 'hide'
}

// combineReducers хорошо использовать когда нужно разделить много reducer'ов на отдельные файлы
// вместе со своими экшенами, тут как-то бессмыслено

export const characterCheck = (state = initialState.characterCheck, action) => {
    switch (action.type) {
        case CHARACTER_CHECK: return action.payload;
        default: return state;
    }
}
export const pageDisplay = (state = [ initialState.linkClass, initialState.mainInfo ] , action) => {
    switch (action.type) {
        case PAGE_DISPLAY: return action.payload;
        default: return state;
    }
}

export const rootReducer = combineReducers({ characterCheck, pageDisplay });