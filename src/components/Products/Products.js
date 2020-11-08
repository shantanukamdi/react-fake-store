import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import ProductShimmerCard from '../ProductShimmerCard/ProductShimmerCard';

import './Products.css';

const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Products({ products }) {
	return (
		<div className='products'>
			{products && products.length > 0
				? products.map((product) => {
						return <ProductCard product={product} />;
				  })
				: shimmerArray.map((el, index) => {
						return <ProductShimmerCard />;
				  })}
		</div>
	);
}

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Products;
