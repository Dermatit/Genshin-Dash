import CharacterInfo from './SubComponent.jsx';
import cardData from '../main/data.js';
import './index.css';
import { useSelector } from 'react-redux';

export default function Info() {
    const characterCheck = useSelector(state => state.characterCheck);
    return <CharacterInfo {...cardData.find(elem => characterCheck === elem.name)} />;
}