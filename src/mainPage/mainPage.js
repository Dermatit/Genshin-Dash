import React, { useState } from 'react';
import './MainPage.css';
import '../General.css';
import Weapon from '../weapon/Weapon.js';
import Artefact from '../artefact/Artefact.js';
import Rotation from '../rotation/Rotation.js';
import Party from '../party/Party.js';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Info from '../info/Info.js';
import cardData from './MainPageData.js';

function MainPage() {
    const [keyGen, setKey] = useState("key" + Math.floor(Math.random() * 10000));

    const [linkClass, setLinkClass] = useState("links");
    const [mainInfo, setMainInfo] = useState("hide");

    const stateChanger = (setLink, setCard) => {
        setLinkClass(setLink);
        setMainInfo(setCard); 
    }

    const [eventCatcher, setEventCatcher] = useState();
    
    const showCard = (event) => {
        setEventCatcher(event.target.dataset.v);
        stateChanger("hide", "main-info");
        setKey("key" + Math.floor(Math.random() * 10000));
    }

    const [screenSeeker, setScreenSeeker] = useState(window.innerWidth);
    window.addEventListener('resize', ()=> setScreenSeeker(window.innerWidth));
   
    let i = 0;
    let tempKeeper = [];
    let bigTempKeeper = [];

    const lowKeeperOut = () => {
        let b = 0;
        for ( i; i < cardData.length; i++ ) {
            if ( b > 3 ) {
                b = 0;
                break;
            }
            else {
                if (screenSeeker > 1200) {
                    b++;
                    tempKeeper.push(<div className="link-box">
                        <div className="link-slider" 
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(0, -1%)'} 
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, -15%)'} 
                        onClick={showCard}>
                            <h1 className="link-name" data-v={cardData[i].name}>{cardData[i].rusName}</h1>
                            <img data-v={cardData[i].name} className="link" src={cardData[i].cardImage} alt={cardData[i].name}/>
                        </div>
                    </div>);
                }
                else {
                    b++;
                    tempKeeper.push(<div className="link-box">
                        <div className="link-slider" onClick={showCard}>
                            <h1 className="link-name" data-v={cardData[i].name}>{cardData[i].rusName}</h1>
                            <img data-v={cardData[i].name} className="link" src={cardData[i].cardImageLowResolution} alt={cardData[i].name}/>
                        </div>
                    </div>);
                }
            }
        }
    }

    const keeperOut = () => {
        let b = 0;
        while (b < cardData.length / 4) {
            b++;
            lowKeeperOut();
            bigTempKeeper.push(<div className="links-container">{tempKeeper}</div>);
            tempKeeper = [];
        }
        return bigTempKeeper;
    }

    return (
        <main>
            <Header stateChanger={stateChanger}></Header>
            
            <div className={linkClass} key={screenSeeker}>
                {keeperOut()}
            </div>

            <div className={mainInfo} key={keyGen}>
                <div className="main-info-container">
                    <Info eventCatcher={eventCatcher}/>
                    <Party eventCatcher={eventCatcher}/>
                    <Rotation eventCatcher={eventCatcher}/>
                    <Artefact eventCatcher={eventCatcher}/>
                    <Weapon eventCatcher={eventCatcher}/>
                </div>
            </div>

            <Footer></Footer>

        </main>
    );
}

export default MainPage;