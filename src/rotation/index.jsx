import { useState } from 'react';
import { Rotations } from './SubComponent';
import './index.css';

export default function Rotation() {

    const [isRender, setIsRender] = useState(false);

    return (
        <section>
            <div className="rotation" onClick={() => setIsRender(!isRender)}>Ротации</div>
            {isRender && <Rotations />}
        </section>
    );
}