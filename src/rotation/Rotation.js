import { useState, useEffect } from 'react'
import './Rotation.css'
import {RotationReccomendation, RotationText} from './RotationChildren'

export default function Rotation() {

    const [containerRender, setContainerRender] = useState(false)
    const [content, setContent] = useState()

    useEffect(()=> {
        containerRender? setContent([<RotationReccomendation/>, <RotationText/>]) : setContent(null)
    }, [containerRender])

    return (
        <section>
            <div className="rotation" onClick={() => setContainerRender(!containerRender)}>Ротации</div>
            {content}
        </section>
    )
}