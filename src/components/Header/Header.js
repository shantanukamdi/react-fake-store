import React, { useContext } from 'react';

import './Header.css';

import AppContext from '../../context/AppContext';

function Header() {
	const [cart, setCart] = useContext(AppContext);
	console.log('Header -> cart', cart);
	return (
		<div class='Navbar'>
			<nav class='Navbar__Items'>
				<div class='Navbar__Link Navbar__Link-brand'>EFlipkart</div>
				<div class='Navbar__Link'>Home</div>
				<div class='Navbar__Link'>About</div>
				<div class='Navbar__Link'>Contact</div>
			</nav>
			<nav class='Navbar__Items Navbar__Items--right'>
				<div class='Navbar__Link'>Cart {cart.length}</div>
			</nav>
		</div>
	);
}

export default Header;

/**
 * <div class='topnav'>
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
 */
