import { artefactData } from'./data.js';
import { useSelector } from 'react-redux';

export function Artefacts() {
    const characterCheck = useSelector(state => state.characterCheck);

    const artefactSets = artefactData.find(elem => characterCheck === elem.name).sets.map(elem => 
        <div className="artefact-img" key={elem.name}>
            <div className="artefact-name">{elem.name}</div>
            <img className="artefact-icon" src={elem.link}/>
        </div>
    );

    const artefactStats = artefactData.find(elem => characterCheck === elem.name).stats.map(elem => 
        <div className="artefact-stats" key={elem}>{elem}</div>
    );

    const artefactText  = artefactData.find(elem => characterCheck === elem.name).text.map(elem => 
        <div className="artefact-text" key={elem}>{elem}</div>
    );

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