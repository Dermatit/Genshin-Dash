import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// название файлов для компонентов обычно с большой буквы (а не только для его стилей)
// для элемента Header, например, со своими стилями и данными, принято использовать:
// - Header (папка)
// - - index.jsx (основной файл с компонентом)
// - - index.css (стили)
// - - SubComponent.jsx (какой-то отдельный микро-компонент специально для Header)
// - - data.js (данные специально для этой папки)
// https://github.com/airbnb/javascript/tree/master/react#basic-rules

// не понимаю, зачем тебе 2 отдельных файла со стилями, они только тут используются
import './MainPage.css'
import '../General.css'

import Weapon from '../weapon/Weapon.js'
import Artefact from '../artefact/Artefact.js'
import Rotation from '../rotation/Rotation.js'
import Party from '../party/Party.js'
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'
import Info from '../info/Info.js'
import CharacterLinks from './CharacterLinks'

export default function MainPage() {
    const [linkClass, mainInfo] = useSelector(state => state.pageDisplay)

		// зачем? без этого все нормально работает
    const [keyGen, setKey] = useState()

    const [screenSeeker, setScreenSeeker] = useState(window.innerWidth)
    window.addEventListener('resize', ()=> setScreenSeeker(window.innerWidth))

    return (
        <main>
            <Header />
						{/* key нужно указывать для элементов, создаваемых в цикле, чтобы реакту было легче ререндерить, тут он не нужен */}
            <div className={linkClass} key={screenSeeker} onClick={() => setKey("key" + Math.floor(Math.random() * 10000))}>
                <CharacterLinks screenSize={screenSeeker}/>
            </div>

						{/* тут тоже */}
            <div className={mainInfo} key={keyGen}>
                <div className="main-info-container">
                    <Info />
                    <Party />
										{/* те же самые замечания внутри Rotation, что и в Party */}
                    <Rotation />
										{/* те же самые замечания внутри Artefact, что и в Party */}
                    <Artefact />
										{/* те же самые замечания внутри Weapon, что и в Party */}
                    <Weapon />
                </div>
            </div>

            <Footer/>
        </main>
    )
}