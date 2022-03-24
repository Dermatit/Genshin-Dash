import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageDisplayAction } from '../redux/actions';
import './index.css';

export default function Header() {
	const dispatch = useDispatch();

	const [pageCheck, setPageCheck] = useState(false);
	const pageCheckHandler = () => setPageCheck(pageCheck => !pageCheck);
	window.onclick = (e) => e.target.className === 'link' || e.target.className === 'link-name' ? pageCheckHandler() : null;
    
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => scrollPosition < 150 ? setScrollPosition(window.pageYOffset) : null;
	
	window.addEventListener('scroll', handleScroll, { passive: true });

	const superButton = () => {
		if (scrollPosition > 100) {
			return <div className='back-button' onClick={()=> window.scrollTo({top: 0})}>↑</div>;
		}
		else if (scrollPosition < 100 && pageCheck) {
			return <div className='back-button' onClick={()=> {pageCheckHandler(); dispatch(pageDisplayAction('links', 'hide'))}}>←</div>;
		}
		else {
			return <div className='logo'><img src='logo.svg'/></div>;
		}
	}

    return (
        <header>
            <div className='header-width'>
				{superButton()}
            </div>
        </header>
    );
}