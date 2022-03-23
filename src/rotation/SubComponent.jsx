import rotationData from'./data.js';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function Rotations() {
    const characterCheck = useSelector(state => state.characterCheck);
    const rotation = useMemo(() => {
        const rotation = rotationData.find(elem => characterCheck === elem.name);
        return rotation.rotation.map(elem => <div className="rotation-info" key={elem}>{elem}</div>);
    }, [characterCheck]);

    const rotationText = useMemo(() => {
        const rotationText = rotationData.find(elem => characterCheck === elem.name);
        return rotationText.text.map(elem => <div className='rotation-text' key={elem}>{elem}</div>);
    }, [characterCheck]);

    return (
        <>
            <div className='container'>{rotation}</div>
            <div className='container'>{rotationText}</div>
        </>
    )
}