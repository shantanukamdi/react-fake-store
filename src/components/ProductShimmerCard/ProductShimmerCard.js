import React from 'react';

import './ProductShimmerCard.css';

function ProductShimmerCard() {
	return (
		<div class='shimmer-card'>
			<div class='wrapper'>
				<div class='product-image animate din'></div>
				<div class='comment br animate'></div>
				{/* <div class='comment br animate'></div>
				<div class='comment br animate'></div> */}
			</div>
		</div>
	);
}

export default ProductShimmerCard;
