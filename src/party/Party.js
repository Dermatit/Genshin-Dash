import React, { useState } from 'react';
import './Party.css';
import partyData from'./PartyData.js';
import useOut from '../megaHooks.js';

function Party({eventCatcher}) {

    const artefact = useOut("party", eventCatcher, "Отряды");

    const [partiesOut, setPartiesOut] = useState("");
    const [partiesText, setPartiesText] = useState("");

    const [partyClass, setPartyClass] = useState("container");

    const showParty = (event) => {

        partyClass === "hide" ? setPartyClass("container") : setPartyClass("hide");

        partyData.forEach((elem) => {
            if (event.target.dataset.v === elem.name)    {
                setPartiesOut(<div className={partyClass}>
                    {elem.party.map((elem) => { return <div className="char-container">{elem.map((elem) => { return <img className="char-icon" src={elem.img}/>})}</div>})}
                </div>);
                setPartiesText(<div className={partyClass}>
                   <div className="party-text">{elem.text}</div>
                </div>)
            }
        });
    }

    return (
        <>
            <section>
                <div onClick={showParty}>{artefact}</div>
                {partiesOut}
                {partiesText}
            </section>
        </>
    );
}

export default Party;