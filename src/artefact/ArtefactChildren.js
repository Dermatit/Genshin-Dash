import { artefactData } from'./ArtefactData.js'
import { useSelector } from 'react-redux'

export function ArtefactParameters() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        <div className='container'>{
            artefactData.map((elem) => {  
                if (characterCheck === elem.name) {
                    return [
                        <div className='artefact-container'>{elem.sets.map((elem) => 
                            <div className="artefact-img">
                                <div className="artefact-name">{elem.name}</div>
                                <img className="artefact-icon" src={elem.link}/>
                            </div>
                        )}</div>,
                        <div className='artefact-container'>{elem.stats.map((elem) => <div className="artefact-stats">{elem}</div>)}</div>,
                        <div className='artefact-container'>{elem.variants.map((elem) => <div className="artefact-variants">{elem}</div>)}</div>
                    ]
                }
            })
        }</div>
    )
}

export function ArtefactText() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        <div className='container'>{
            artefactData.map((elem) => {
                if (characterCheck === elem.name) {
                    return elem.text.map((elem) => <div className="artefact-text">{elem}</div>)
                }
            })
        }</div>
    )
}