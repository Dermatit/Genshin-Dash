import React, { useState } from 'react';
import cardData from '../mainPage/MainPageData.js';
import './InfoPage.css';

function Info({eventCatcher}) {

    let info = [];

    cardData.map((elem) => {
        if (eventCatcher === elem.name)    {
            info.push(<div className="char-card-container">
                        <div className="char-short-info">
                            <div className="name">{elem.rusName}</div>
                            <div className="rarity">{elem.rarity}</div>
                            <a href="https://genshin.gg/tier-list" title="По данным сайта Genshin.gg" target="_blank"><div className="tierlist">{elem.tierlist}</div></a>
                        </div>
                        <img src={elem.img} alt={elem.name} className="img" style={{backgroundImage:`url(${elem.bcImg})`}}/>
                    </div>,
                    <div className="container">{elem.description}</div>);
        }
    });

    return (
        <section>
            {info}
        </section>
    );
}

export default Info;