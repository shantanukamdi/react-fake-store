import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/AppContext.js';

import './ProductCard.css';

function ProductCard({ product }) {
	const history = useHistory();
	const [cart, setCart] = useContext(AppContext);

	const { id, title, price, description, category, image } = product;

	const handleAddToCart = (evt, product) => {
		evt.stopPropagation();
		if (product) {
			const cartItems = [...cart];
			cartItems.push(product);
			setCart(cartItems);
		}
	};

	const handleNavigateToProductDetail = (id) => {
		if (id) {
			history.push(`/product-detail/${id}`);
		}
	};

	return (
		<div className='card' title={title} onClick={() => handleNavigateToProductDetail(id)}>
			<img src={image} alt={title} className='card__image' />

			<div className='card__content'>
				<p>{title}</p>
			</div>

			<div className='card__info'>
				<div>$ {price}</div>
				<div>
					<button className='card__link' onClick={(evt) => handleAddToCart(evt, product)}>
						Add to Cart
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
