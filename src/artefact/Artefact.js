import { useState, useEffect } from 'react'
import './Artefact.css'
import { ArtefactParameters, ArtefactText } from './ArtefactChildren'

export default function Artefact({keyGen}) {

    const [containerRender, setContainerRender] = useState(false)
    const [content, setContent] = useState()

    useEffect(()=> {
        containerRender? setContent([<ArtefactParameters/>, <ArtefactText/>]) : setContent(null)
    }, [containerRender])

    return (
        <section key={keyGen}>
            <div className="artefacts" onClick={() => setContainerRender(!containerRender)}>Артефакты</div>
            {content}
        </section>
    )
}