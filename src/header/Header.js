import { useRef } from 'react'
import SuperButton from '../superButton/SuperButton.js'
import './Header.css'

export default function Header() {

    const logoRef = useRef();
    
    return (
        <header>
            <div className="header-width">
                <SuperButton logoRef={logoRef}/>
                <div className="logo" ref={logoRef}><img src="logo.svg"/></div>
            </div>
        </header>
    )
}