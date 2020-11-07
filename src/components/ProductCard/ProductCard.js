import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '../../context/AppContext.js';

import './ProductCard.css';

function ProductCard({ product }) {
	const [cart, setCart] = useContext(AppContext);

	const { id, title, price, description, category, image } = product;

	const handleAddToCart = (product) => {
		if (product) {
			const cartItems = [...cart];
			cartItems.push(product);
			setCart(cartItems);
		}
	};

	return (
		<div class='grid__item'>
			<div class='card'>
				<img class='card__img' src={image} alt={title} />
				<div class='card__content'>
					<h1 class='card__header'>{title}</h1>
					{/* <p class='card__text'>{description}</p> */}
					<button class='card__btn'>$ {price}</button>
					<button
						class='card__btn'
						onClick={() => {
							handleAddToCart(product);
						}}
					>
						Add To Card
					</button>
				</div>
			</div>
		</div>
	);
}

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
