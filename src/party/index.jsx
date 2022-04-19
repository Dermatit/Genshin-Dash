import { useState } from 'react';
import { PartyCharacters } from './SubComponent';
import './index.css';

export default function Party() {
    const [isRender, setIsRender] = useState(false);
    return (
        <section>
            <div className="party" onClick={() => setIsRender(!isRender)}>Отряды</div>
			{isRender && <PartyCharacters/>}
        </section>
    );
}