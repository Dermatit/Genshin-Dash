import { useState } from 'react';
import { Weapons } from './SubComponent';
import './index.css';

export default function Weapon() {
    const [isRender, setIsRender] = useState(false);
    return (
        <section>
            <div className="weapons" onClick={() => setIsRender(!isRender)}>Оружие</div>
            {isRender && <Weapons />}
        </section>
    );
}