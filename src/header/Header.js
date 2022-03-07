import React, { useState, useRef, useEffect } from 'react';
import SuperButton from '../superButton/SuperButton.js';
import './Header.css';

function Header({stateChanger}) {

    const screenWidth = useState(window.innerWidth);

    const logoRef = useRef();

    // const voidButton = useState(() => screenWidth[0] > 1200 ? <div className="void-button"></div> : "" );
    
    return (
        <>
            <header>
                <div className="header-width">

                    <SuperButton stateChanger={stateChanger} logoRef={logoRef}/>
                    <div className="logo" ref={logoRef}><img src="logo.svg"/></div>
                </div>
            </header>
        </>
    );
}

export default Header;