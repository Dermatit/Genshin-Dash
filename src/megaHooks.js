import { useState } from 'react';
import cardData from './mainPage/MainPageData';

const useOut = (className, datavProperty, property) => {

    return <div className={className} data-v={datavProperty}>{property}</div>;

}

export default useOut