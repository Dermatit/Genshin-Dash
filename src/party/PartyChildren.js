import partyData from'./PartyData.js'
import { useSelector } from 'react-redux'

export function PartyCharacters() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        <div className='container'>{
            partyData.map((elem) => {
                if (characterCheck === elem.name) {
                    return elem.party.map((elem) => <div className="char-container">{elem.map((elem) => <img className="char-icon" src={elem}/>)}</div>)
                }
            })
        }</div>
    )
}
export function PartyText() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        <div className='container'>{
            partyData.map((elem) => {
                if (characterCheck === elem.name) {
                    return <div className="party-text">{elem.text}</div>
                }
            })
        }</div>
    )
}