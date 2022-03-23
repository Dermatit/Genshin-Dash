import partyData from'./data.js';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function PartyCharacters() {
    const characterCheck = useSelector(state => state.characterCheck);

    const parties = useMemo(() => {
        const parties = partyData.find(elem => characterCheck === elem.name);
        return parties.party.map(elem => {
            return (
                <div className="char-container" key={elem.join('-')}>
                    {elem.map(elem => <img className="char-icon" key={elem} src={elem}/>)}
                </div>
            );
        });
    }, [characterCheck]);

    const partiesText = useMemo(() => {
        const partiesText = partyData.find(elem => characterCheck === elem.name);
        return partiesText.text.map(elem => <div className="party-text" key={elem}>{elem}</div>);
    }, [characterCheck]);

    return (
        <>
            <div className='container'>{parties}</div>
            <div className='container'>{partiesText}</div>
        </>
    );
}