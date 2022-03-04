import React, { useState } from 'react';
import './Weapon.css';
import weaponData from'./WeaponData.js';
import useOut from '../megaHooks.js';

function Weapon({eventCatcher}) {

    const weapon = useOut("weapons", eventCatcher, "Оружие");

    const [weaponsOut, setWeaponsOut] = useState("");
    const [weaponTextOut, setWeaponTextOut] = useState("");

    const [weaponsClass, setWeaponClass] = useState("container");
    
    const showWeapon = (event) => {

        weaponsClass === "hide" ? setWeaponClass("container") : setWeaponClass("hide");

        weaponData.forEach((elem) => {
            if (event.target.dataset.v === elem.name)    {
                setWeaponsOut(<div className={weaponsClass}>
                    <div className="weapon-container">{elem.weapon.map((elem, i) => {
                            return <div className = "weapon-img-container">
                                <div className={elem.rarityClass}>
                                    <img className = "weapon-icon" src={elem.link}/>
                                    <div className = "weapon-name">{elem.naming}</div>
                                </div>
                            </div>
                        })}</div></div>);
                setWeaponTextOut(elem.text.map((elem) => { return <div className={weaponsClass}>
                    <div className="weapon-text">{elem}</div>
                </div>})); 
            }
        });
    }

    return (
        <>  
            <section>
                <div onClick={showWeapon}>{weapon}</div>
                {weaponsOut}
                {weaponTextOut}
            </section>
        </>
    );
}

export default Weapon;