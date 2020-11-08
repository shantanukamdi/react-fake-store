import React, { useContext } from 'react';

import './Header.css';

import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

function Header() {
	const [cart, setCart] = useContext(AppContext);
	const history = useHistory();

	const handleNavToCart = () => {
		history.push('/cart');
	};

	const handleNavToHome = () => {
		history.push('/');
	};

	return (
		<div className='header cursor-pointer'>
			<div onClick={handleNavToHome}>
				<h3>ECommerce</h3>
			</div>

			<div>
				<div onClick={handleNavToCart} className='cursor-pointer'>
					Cart <span className='cart-length'>{cart.length}</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
