import CharacterLink from './SubComponent.jsx';
import cardData from '../data.js';
import './index.css';

export default function CharacterLinks() {
    return (
        cardData.map((elem) => <CharacterLink key={elem.name} name={elem.name} ruName={elem.ruName} img={elem.cardImage}/>)
    );
}