import React, { useContext } from 'react';

import './Header.css';

import AppContext from '../../context/AppContext';

function Header() {
	const [cart, setCart] = useContext(AppContext);
	console.log('Header -> cart', cart);
	return (
		<div class='topnav'>
			<div>
				<a class='active' href='#home'>
					Home
				</a>
				<a href='#news'>News</a>
				<a href='#contact'>Contact</a>
				<a href='#about'>About</a>
			</div>

			<div style={{ float: 'right' }}>
				<a href='#about'>Cart {cart.length}</a>
			</div>
		</div>
	);
}

export default Header;
