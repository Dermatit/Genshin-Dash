import { useDispatch } from 'react-redux'
import { characterCheckAction, pageDisplayAction } from '../redux/actions'

// для каждого элемента лучше иметь свой файл со стилями

export default function CharacterLink({name, ruName, img, screenSize}) {
    const dispatch = useDispatch()
    const onCharacterCheck = (e) => {
				// по идее каждый вызов dispatch - ререндер элемента, лучше одновременно делать только один за одно действие
				// хотя redux вроде по-умному это обрабатывает в стандартных ивентах
        dispatch(characterCheckAction(e.target.dataset.v))
        dispatch(pageDisplayAction('hide', 'main-info'))   
    }

    return (
        <div className="link-box">
            <div className="link-slider" 
						/*
							это дело надо в стилях делать, а не с помощью хуков и js,
							соответственно фишка с screenSize - лишняя
							@media (min-width: 1200px) {
								.link-slider:hover {
									transform: translate(0, -1%);
								}
							}
						*/
            onMouseEnter={(e) => {if (screenSize > 1200) e.currentTarget.style.transform = 'translate(0, -1%)'}} 
            onMouseLeave={(e) => {if (screenSize > 1200) e.currentTarget.style.transform = 'translate(0, -15%)'}} 
            onClick={onCharacterCheck}>
                <h1 className="link-name" data-v={name}>{ruName}</h1>
                <img data-v={name} className="link" src={img} alt={name}/>
            </div>
        </div>
    )
}