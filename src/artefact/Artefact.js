import React, { useState } from 'react';
import './Artefact.css';
import artefactData from'./ArtefactData.js';
import useOut from '../megaHooks.js';

function Artefact({eventCatcher, keyGen}) {

    const artefact = useOut("artefacts", eventCatcher, "Артефакты");

    const [artCardOut, setArtCardOut] = useState("");
    const [artTextOut, setArtTextOut] = useState("");

    const [artefactClass, setArtefactClass] = useState("container");

    const showArtefact = (event) => {

        artefactClass === "hide" ? setArtefactClass("container") : setArtefactClass("hide");

        artefactData.forEach((elem) => {
            if (event.target.dataset.v === elem.name)    {
                setArtCardOut(<><div className={artefactClass}>
                    <div className="artefact-container">
                        {elem.sets.map((elem) => { return <div className="artefact-img">
                                <div className="artefact-name">{elem.name}</div>
                                <img className="artefact-icon" src={elem.link}/>
                            </div>
                        })}
                    </div>
                    <div className="artefact-container">
                        {elem.stats.map((elem) => { return <div className="artefact-stats">{elem}</div>})}
                    </div>
                    <div className="artefact-container">
                        {elem.variants.map((elem) => { return <div className="artefact-variants">{elem}</div>})}
                    </div>
                </div></>);
                setArtTextOut(elem.text.map((elem) => { return <div className={artefactClass}>
                        <div className="artefact-text">{elem}</div>
                    </div>
                }));
            }
        });
    }

    return (
        <>
            <section key={keyGen}>
                <div onClick={showArtefact}>{artefact}</div>
                {artCardOut}
                {artTextOut}
            </section>
        </>
    );
}

export default Artefact;