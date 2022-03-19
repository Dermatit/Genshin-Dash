import { useState } from 'react'
import { useRender } from '../gigaHook'
import { ArtefactParameters, ArtefactText } from './ArtefactChildren'
import './Artefact.css'

// зачем keyGen? ты его никогда не передаешь
export default function Artefact({keyGen}) {

    const [boolean, setBoolean] = useState(false)

    return (
        <section key={keyGen}>
            <div className="artefacts" onClick={() => setBoolean(!boolean)}>Артефакты</div>
            {useRender([<ArtefactParameters/>, <ArtefactText/>], boolean)}
        </section>
    )
}