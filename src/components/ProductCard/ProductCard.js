import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

function ProductCard({ product }) {
	const { id, title, price, description, category, image } = product;

	return (
		<div className='product-card'>
			{/* image thumbnail */}
			<img src={image} alt={title} />
			{/* title */}
			<p>{title || 'No title'}</p>
			{/* price */}
			<p>&#x20b9; {price}</p>
		</div>
	);
}

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
