import React, { useState } from 'react'
import { useSelector } from 'react-redux'

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

    const [keyGen, setKey] = useState()

    const [screenSeeker, setScreenSeeker] = useState(window.innerWidth)
    window.addEventListener('resize', ()=> setScreenSeeker(window.innerWidth))

    return (
        <main>
            <Header />

            <div className={linkClass} key={screenSeeker} onClick={() => setKey("key" + Math.floor(Math.random() * 10000))}>
                <CharacterLinks screenSize={screenSeeker}/>
            </div>

            <div className={mainInfo} key={keyGen}>
                <div className="main-info-container">
                    <Info />
                    <Party />
                    <Rotation />
                    <Artefact />
                    <Weapon />
                </div>
            </div>

            <Footer/>
        </main>
    )
}