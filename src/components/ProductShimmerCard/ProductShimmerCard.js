import React from 'react';

import './ProductShimmerCard.css';

function ProductShimmerCard() {
	return (
		<div className='shimmer-card'>
			<div className='wrapper'>
				<div className='product-image animate din'></div>
				<div className='comment br animate'></div>
				{/* <div class='comment br animate'></div>
				<div class='comment br animate'></div> */}
			</div>
		</div>
	);
}

export default ProductShimmerCard;
