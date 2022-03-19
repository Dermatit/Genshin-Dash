import partyData from'./PartyData.js'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export function PartyCharacters() {
    const characterCheck = useSelector(state => state.characterCheck);

		// почитай про стандартные хуки
		// https://reactjs.org/docs/hooks-reference.html
		const parties = useMemo(() => {
			// это на самом деле parties, а не party
			const { party: parties } = partyData.find(elem => characterCheck === elem.name);
			return parties.map(party => {
				return (
					<div className="char-container" key={party.join()}>
						{party.map(characterImagePath => <img className="char-icon" key={characterImagePath} src={characterImagePath}/>)}
					</div>
				);
			});
		}, [characterCheck]);

		return <div className='container'>{parties}</div>;
    // return (
    //     <div className='container'>{
    //         partyData.map((elem) => {
    //             if (characterCheck === elem.name) {
    //                 return elem.party.map((elem) => <div className="char-container">{elem.map((elem) => <img className="char-icon" src={elem}/>)}</div>)
    //             }
    //         })
    //     }</div>
    // )
}

// зачем тут вообще разделение компонентов? они везде вместе используются и код у них почти одинаков
export function PartyText() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
				// здесь похожая ситуация с ситуацией выше
        <div className='container'>{
            partyData.map((elem) => {
                if (characterCheck === elem.name) {
                    return <div className="party-text">{elem.text}</div>
                }
            })
        }</div>
    )
}