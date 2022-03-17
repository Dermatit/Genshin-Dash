import { useState } from 'react'
import { pageDisplayAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './SuperButton.css'

export default function SuperButton({ logoRef }) {

    const dispatch = useDispatch()

    const [[buttonStyler, buttonText, pageCheck], setbuttonStyler] = useState(["void-button", "", false])

    window.onscroll = () => {
        if (pageCheck) {
            window.scrollY > 100 ? setbuttonStyler(["back-button", "↑", true]) : setbuttonStyler(["back-button", "←", true])
        }
        else {
            if (window.scrollY > 100) {
                setbuttonStyler(["back-button", "↑"])
                logoRef.current.style.display = "none"
            }
            else {
                setbuttonStyler(["void-button", ""])
                logoRef.current.style.display = ""
            }
        }
    }
    window.onclick = (event) => {
        if (event.target.className === "link" || event.target.className === "link-name") {
            setbuttonStyler(["back-button", "←", true])
            logoRef.current.style.display = "none"
        }
    }
    const superButtonClickScroll = () => {
        if (window.scrollY > 100) {
            window.scrollTo({top: 0})
        }
        else {
            dispatch(pageDisplayAction('links', 'hide'))
            setbuttonStyler(["void-button", "", false])
            logoRef.current.style.display = ""
        }       
    }
    
    return (
        <div className={buttonStyler} onClick={superButtonClickScroll}>{buttonText}</div>
    )
}