import weaponData from'./WeaponData.js'
import { useSelector } from 'react-redux'

export function WeaponRecommendation() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        weaponData.map((elem) => {
            if (characterCheck === elem.name) {
                return  <div className='container'>
                            <div className="weapon-container">{elem.weapon.map((elem, i) => 
                                <div className = "weapon-img-container">
                                    <div className={elem.rarityClass}>
                                        <img className = "weapon-icon" src={elem.link}/>
                                        <div className = "weapon-name">{elem.naming}</div>
                                    </div>
                                </div>
                            )}</div>
                        </div>
            }
        })
    )
}
export function WeaponText() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        weaponData.map((elem) => {
            if (characterCheck === elem.name) {
                return elem.text.map((elem) => 
                            <div className='container'>
                                <div className="weapon-text">{elem}</div>
                            </div>
                )
            }
        })
    )
}