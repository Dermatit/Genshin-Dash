import { useSelector } from 'react-redux';
import './index.css';
import Weapon from '../weapon/index.jsx';
import Artefact from '../artefact/index.jsx';
import Rotation from '../rotation/index.jsx';
import Party from '../party/index.jsx';
import Header from '../header/index.jsx';
import Footer from '../footer/index.jsx';
import Info from '../info/index.jsx';
import CharacterLinks from './SubComponent/index.jsx';

export default function MainPage() {
    const [linkClass, mainInfo] = useSelector(state => state.styles);
    const characterCheck = useSelector(state => state.characterCheck);

    return (
        <main>
            <Header />
            <div className={linkClass}>
                <CharacterLinks/>
            </div>
            <div className={mainInfo} key={characterCheck}>
                <div className="main-info-container">
                    <Info />
                    <Party />
                    <Rotation />
                    <Artefact />
                    <Weapon />
                </div>
            </div>
            <Footer/>
        </main>
    );
}