import weaponData from'./data.js';
import { useSelector } from 'react-redux';

export function Weapons() {
    const characterCheck = useSelector(state => state.characterCheck);

    const weapons = weaponData.find(elem => characterCheck === elem.name).weapon.map(elem => 
        <div className = "weapon-img-container" key={elem.naming}>
            <div className={elem.rarityClass}>
                <img className = "weapon-icon" src={elem.link}/>
                <div className = "weapon-name">{elem.naming}</div>
            </div>
        </div>
    );

    const weaponsText = weaponData.find(elem => characterCheck === elem.name).text.map(elem => 
        <div className='container' key={elem}>
            <div className="weapon-text">{elem}</div>
        </div>
    );

    return (
        <>
            <div className='container'><div className="weapon-container">{weapons}</div></div>
            {weaponsText}
        </>
    );
}