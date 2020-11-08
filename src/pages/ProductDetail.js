import React from 'react';

import { useParams } from 'react-router-dom';

function ProductDetail() {
	const { id } = useParams();

	return <div>Product Details: {id}</div>;
}

export default ProductDetail;
