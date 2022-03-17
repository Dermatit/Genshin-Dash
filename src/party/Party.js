import { useState } from 'react'
import { useRender } from '../gigaHook'
import {PartyCharacters, PartyText} from './PartyChildren'
import './Party.css'

export default function Party() {

    const [boolean, setBoolean] = useState(false)

    return (
        <section>
            <div className="party" onClick={() => setBoolean(!boolean)}>Отряды</div>
            {useRender([<PartyCharacters/>, <PartyText/>], boolean)}
        </section>
    )
}