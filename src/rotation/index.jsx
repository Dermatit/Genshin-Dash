import { useState } from 'react';
import { Rotations } from './SubComponent';
import './index.css';

export default function Rotation() {

    const [boolean, setBoolean] = useState(false);

    return (
        <section>
            <div className="rotation" onClick={() => setBoolean(!boolean)}>Ротации</div>
            {boolean && <Rotations />}
        </section>
    );
}