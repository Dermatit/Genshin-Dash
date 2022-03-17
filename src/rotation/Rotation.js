import { useState } from 'react'
import { useRender } from '../gigaHook'
import {RotationReccomendation, RotationText} from './RotationChildren'
import './Rotation.css'

export default function Rotation() {

    const [boolean, setBoolean] = useState(false)

    return (
        <section>
            <div className="rotation" onClick={() => setBoolean(!boolean)}>Ротации</div>
            {useRender([<RotationReccomendation/>, <RotationText/>], boolean)}
        </section>
    )
}