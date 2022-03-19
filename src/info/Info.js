import CharacterInfo from './InfoChildren.js'
import cardData from '../mainPage/MainPageData.js'
import './InfoPage.css'

import { useSelector } from 'react-redux'

export default function Info() {
    const characterCheck = useSelector(state => state.characterCheck)

    return (
				// тут тоже key нужен (смотри вообще в консоль разработчика в браузере, там ведь все про это написано)
        cardData.map((elem) => {
            if (characterCheck === elem.name) {
            return <CharacterInfo 
                name={elem.name} 
                ruName={elem.rusName} 
                img={elem.img} 
                backgroundImg={elem.bcImg} 
                rarity={elem.rarity} 
                description={elem.description} 
                tierlist={elem.tierlist}
                />
            }
        })
				// а лучше используй
				// <CharacterInfo {...cardData.find(elem => characterCheck === elem.name)} />
    )
}