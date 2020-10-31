import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

import './Products.css';

function Products({ products }) {
	return (
		<div className='products'>
			{products && products.length > 0 ? (
				products.map((product) => {
					return <ProductCard product={product} />;
				})
			) : (
				<></>
			)}
		</div>
	);
}

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Products;
