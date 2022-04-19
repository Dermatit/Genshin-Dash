import { useState } from 'react';
import { Artefacts } from './SubComponent';
import './index.css';

export default function Artefact() {

    const [isRender, setIsRender] = useState(false)

    return (
        <section>
            <div className="artefacts" onClick={() => setIsRender(!isRender)}>Артефакты</div>
            {isRender && <Artefacts />}
        </section>
    )
}