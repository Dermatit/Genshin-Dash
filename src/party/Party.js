import { useState } from 'react'
import { useRender } from '../gigaHook'
import {PartyCharacters, PartyText} from './PartyChildren'
import './Party.css'

export default function Party() {

    const [boolean, setBoolean] = useState(false)

    return (
        <section>
						{/* 
							каждый раз когда обновлется boolean, происходит ререндер этого компонента, используй
							onClick={() => setBoolean(prevState => !prevState)}
						*/}
            <div className="party" onClick={() => setBoolean(!boolean)}>Отряды</div>
						{/*
							 во-первых, хуки должны определяться не в return, чтобы при каждом ререндере заного их не запускать
							 во-вторых, этот хук абсолютно не нужен, вот это используй
							 {boolean && [<PartyCharacters/>, <PartyText/>]}
						*/}
            {useRender([<PartyCharacters/>, <PartyText/>], boolean)}
        </section>
    )
}