import { artefactData } from'./data.js';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function Artefacts() {
    const characterCheck = useSelector(state => state.characterCheck);

    const artefactSets = useMemo(() => {
        const artefactSets = artefactData.find(elem => characterCheck === elem.name);
        return artefactSets.sets.map(elem => 
            <div className="artefact-img" key={elem.name}>
                <div className="artefact-name">{elem.name}</div>
                <img className="artefact-icon" src={elem.link}/>
            </div>
        );
    }, [characterCheck]);

    const artefactStats = useMemo(() => {
        const artefactStats  = artefactData.find(elem => characterCheck === elem.name);
        return artefactStats.stats.map(elem => <div className="artefact-stats" key={elem}>{elem}</div>);
    }, [characterCheck]);

    const artefactText = useMemo(() => {
        const artefactText  = artefactData.find(elem => characterCheck === elem.name);
        return artefactText.text.map(elem => <div className="artefact-text" key={elem}>{elem}</div>);
    }, [characterCheck]);

    return (
        <>
            <div className='container'>
                <div className='artefact-container'>{artefactSets}</div>
                <div className='artefact-container'>{artefactStats}</div>
            </div>
            <div className='container'>{artefactText}</div>
        </>
    );
}