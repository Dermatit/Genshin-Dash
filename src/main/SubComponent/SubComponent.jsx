import { useDispatch } from 'react-redux';
import { characterCheckAction, pageDisplayAction } from '../../redux/actions';

export default function CharacterLink({name, ruName, img}) {
    const dispatch = useDispatch();
    const onCharacterCheck = (e) => {
        dispatch(characterCheckAction(e.target.dataset.v));
        dispatch(pageDisplayAction('hide', 'main-info')) ;  
    }

    return (
        <div className="link-box">
            <div className="link-slider" onClick={onCharacterCheck}>
                <h1 className="link-name" data-v={name}>{ruName}</h1>
                <img data-v={name} className="link" src={img} alt={name}/>
            </div>
        </div>
    );
}