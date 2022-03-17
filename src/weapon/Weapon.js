import { useState } from 'react'
import { useRender } from '../gigaHook'
import { WeaponRecommendation, WeaponText } from './WeaponChildren'
import './Weapon.css'

export default function Weapon() {

    const [boolean, setBoolean] = useState(false)

    return (
        <section>
            <div className="weapons" onClick={() => setBoolean(!boolean)}>Оружие</div>
            {useRender([<WeaponRecommendation/>, <WeaponText/>], boolean)}
        </section>
    )
}