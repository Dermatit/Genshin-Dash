import { useState } from 'react';
import { PartyCharacters } from './SubComponent';
import './index.css';

export default function Party() {
    const [boolean, setBoolean] = useState(false);
    return (
        <section>
            <div className="party" onClick={() => setBoolean(!boolean)}>Отряды</div>
			{boolean && <PartyCharacters/>}
        </section>
    );
}