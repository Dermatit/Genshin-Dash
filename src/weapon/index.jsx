import { useState } from 'react';
import { Weapons } from './SubComponent';
import './index.css';

export default function Weapon() {
    const [boolean, setBoolean] = useState(false);
    return (
        <section>
            <div className="weapons" onClick={() => setBoolean(!boolean)}>Оружие</div>
            {boolean && <Weapons />}
        </section>
    );
}