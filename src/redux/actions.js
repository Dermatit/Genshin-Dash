import { CHARACTER_CHECK, PAGE_DISPLAY } from './types'

export const characterCheckAction = (dataset) => {
    return { 
        type : CHARACTER_CHECK,
        payload: dataset 
    }
}

export const pageDisplayAction = (linkClass, mainInfo) => {
    return { 
        type : PAGE_DISPLAY,
        payload: [linkClass, mainInfo]
    }
}