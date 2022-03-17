import { useState, useEffect } from 'react'
import './Weapon.css'
import { WeaponRecommendation, WeaponText } from './WeaponChildren'

export default function Weapon() {

    const [containerRender, setContainerRender] = useState(false)
    const [content, setContent] = useState()

    useEffect(()=> {
        containerRender? setContent([<WeaponRecommendation/>, <WeaponText/>]) : setContent(null)
    }, [containerRender])

    return (
        <section>
            <div className="weapons" onClick={() => setContainerRender(!containerRender)}>Оружие</div>
            {content}
        </section>
    )
}