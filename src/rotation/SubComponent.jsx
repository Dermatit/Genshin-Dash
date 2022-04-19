import rotationData from'./data.js';
import { useSelector } from 'react-redux';

export function Rotations() {
    const characterCheck = useSelector(state => state.characterCheck);

    const rotation = rotationData.find(elem => characterCheck === elem.name).rotation.map(elem => 
        <div className="rotation-info" key={elem}>{elem}</div>
    );

    const rotationText = rotationData.find(elem => characterCheck === elem.name).text.map(elem => 
        <div className='rotation-text' key={elem}>{elem}</div>
    );

    return (
        <>
            <div className='container'>{rotation}</div>
            <div className='container'>{rotationText}</div>
        </>
    )
}