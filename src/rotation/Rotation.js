import React, { useState } from 'react';
import './Rotation.css';
import rotationData from'./RotationData.js';
import useOut from '../megaHooks.js';

function Rotation({eventCatcher}) {
    
    const artefact = useOut("rotation", eventCatcher, "Ротации");

    const [rotationTextOut, setRotationTextOut] = useState("");
    const [rotationsOut, setRotationsOut] = useState("");

    const [rotationClass, setRotationClass] = useState("hide");

    const showRotation = (event) => {

        rotationClass === "hide" ? setRotationClass("container") : setRotationClass("hide");

        rotationData.forEach((elem,i) => {
            if (event.target.dataset.v === elem.name)    {
                setRotationsOut(elem.rotation.map((elem) => { return <div className="rotation-info">{elem}</div> }));
                setRotationTextOut(elem.text.map((elem) => { return <div className="rotation-text">{elem}</div> }));
            }
        });
    }

    return (
        <>  
            <section>
                <div onClick={showRotation}>{artefact}</div>
                <div className={rotationClass}>
                    {rotationsOut}
                </div>
                <div className={rotationClass}>
                {rotationTextOut}
            </div>
            </section>
        </>
    );
}

export default Rotation;