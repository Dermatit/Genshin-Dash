import CharacterLink from './CharacterLink'
import cardData from './MainPageData.js'

export default function CharacterLinks({screenSize}) {
    return (
				// а вот тут key =  elem.name было бы классно
        cardData.map((elem) => <CharacterLink name={elem.name} ruName={elem.rusName} img={elem.cardImage} screenSize={screenSize}/>)
    )
}