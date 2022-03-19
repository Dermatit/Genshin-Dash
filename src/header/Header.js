import { useRef, useState, useEffect } from 'react'
import SuperButton from './superButton/SuperButton.js'
import './Header.css'

export default function Header() {

    const logoRef = useRef();
    
		// const [scrollPosition, setScrollPosition] = useState(0);
		// const handleScroll = () => setScrollPosition(window.pageYOffset);
		// useEffect(() => {
		// 	window.addEventListener('scroll', handleScroll, { passive: true });
		// 	return () => window.removeEventListener('scroll', handleScroll);
		// }, []);

    return (
        <header>
            <div className="header-width">
								{/* вместо изменения стилей внутри SuperButton лучше просто компонент заменять */}
								{/* {
									scrollPosition > 100
										? <>Заскролено</>
										: <>Не заскролено</>
								} */}
                <SuperButton logoRef={logoRef}/>
                <div className="logo" ref={logoRef}><img src="logo.svg"/></div>
            </div>
        </header>
    )
}