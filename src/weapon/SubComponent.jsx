import weaponData from'./data.js';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function Weapons() {
    const characterCheck = useSelector(state => state.characterCheck);
    const weapons = useMemo(() => {
        const weapons = weaponData.find(elem => characterCheck === elem.name);
        return weapons.weapon.map(elem => 
            <div className = "weapon-img-container" key={elem.naming}>
                <div className={elem.rarityClass}>
                    <img className = "weapon-icon" src={elem.link}/>
                    <div className = "weapon-name">{elem.naming}</div>
                </div>
            </div>
        );
    }, [characterCheck]);

    const weaponsText = useMemo(() => {
        const weaponsText = weaponData.find(elem => characterCheck === elem.name);
        return weaponsText.text.map(elem => <div className='container' key={elem}><div className="weapon-text">{elem}</div></div>);
    }, [characterCheck]);

    return (
        <>
            <div className='container'><div className="weapon-container">{weapons}</div></div>
            {weaponsText}
        </>
    );
}