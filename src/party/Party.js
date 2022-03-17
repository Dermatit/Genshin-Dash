import { useEffect, useState } from 'react'

import './Party.css'
import {PartyCharacters, PartyText} from './PartyChildren'

export default function Party() {
    const [containerRender, setContainerRender] = useState(false)

    const [content, setContent] = useState()

    useEffect(()=> {
        containerRender? setContent([<PartyCharacters/>, <PartyText/>]) : setContent(null)
    }, [containerRender])

    return (
        <section>
            <div className="party" onClick={() => setContainerRender(!containerRender)}>Отряды</div>
            {content}
        </section>
    )
}