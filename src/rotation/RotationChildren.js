import rotationData from'./RotationData.js'
import { useSelector } from 'react-redux'

export function RotationReccomendation() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        <div className='container'>{
            rotationData.map((elem) => {
                if (characterCheck === elem.name) {
                    return elem.rotation.map((elem) => <div className="rotation-info">{elem}</div>)
                }
            })
        }</div>
    )
}

export function RotationText() {
    const characterCheck = useSelector(state => state.characterCheck)
    return (
        <div className='container'>{
            rotationData.map((elem) => {
                if (characterCheck === elem.name) {
                    return elem.text.map((elem) => <div className="rotation-text">{elem}</div>)
                }
            })
        }</div>     
    )
}