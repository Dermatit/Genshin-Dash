import partyData from'./data.js';
import { useSelector } from 'react-redux';

export function PartyCharacters() {
    const characterCheck = useSelector(state => state.characterCheck);

    const parties = partyData.find(elem => characterCheck === elem.name).party.map(elem => 
        <div className="char-container" key={elem.join('-')}>
            {elem.map(elem => <img className="char-icon" key={elem} src={elem}/>)}
        </div>
    );

    const partiesText = partyData.find(elem => characterCheck === elem.name).text.map(elem => 
        <div className="party-text" key={elem}>{elem}</div>
    );

    return (
        <>
            <div className='container'>{parties}</div>
            <div className='container'>{partiesText}</div>
        </>
    );
}