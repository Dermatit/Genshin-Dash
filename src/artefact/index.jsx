import { useState } from 'react';
import { Artefacts } from './SubComponent';
import './index.css';

export default function Artefact() {

    const [boolean, setBoolean] = useState(false)

    return (
        <section>
            <div className="artefacts" onClick={() => setBoolean(!boolean)}>Артефакты</div>
            {boolean && <Artefacts />}
        </section>
    )
}