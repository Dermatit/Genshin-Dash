export default function CharacterInfo({name, ruName, img, backgroundImg, rarity, description, tierlist}) { 
    return (
        <section>
            <div className="char-card-container">
                <div className="char-short-info">
                    <div className="name">{ruName}</div>
                    <div className="rarity">{rarity}</div>
                    <a href="https://genshin.gg/tier-list" title="По данным сайта Genshin.gg" target="_blank"><div className="tierlist">{tierlist}</div></a>
                </div>
                <img src={img} alt={name} className="img" style={{background:`url(${backgroundImg}) no-repeat center`, backgroundSize: "cover"}}/>
            </div>
            <div className="container">{description}</div>
        </section>
    )
}