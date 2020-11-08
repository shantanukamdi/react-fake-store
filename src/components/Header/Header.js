import React, { useContext } from 'react';

import './Header.css';

import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

function Header() {
	const [cart, setCart] = useContext(AppContext);
	const history = useHistory();

	const handleNavToCart = () => {
		history.push('/cart');
		console.log('handleNavToCart -> history', history);
	};

	return (
		<div className='Navbar'>
			<nav className='Navbar__Items'>
				<div className='Navbar__Link Navbar__Link-brand'>EFlipkart</div>
				<div className='Navbar__Link'>Home</div>
				<div className='Navbar__Link'>About</div>
				<div className='Navbar__Link'>Contact</div>
			</nav>
			<nav className='Navbar__Items Navbar__Items--right'>
				<div className='Navbar__Link' onClick={handleNavToCart}>
					Cart {cart.length}
				</div>
			</nav>
		</div>
	);
}

export default Header;
