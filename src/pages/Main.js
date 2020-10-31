import React, { useEffect, useState } from 'react';
import { PRODUCT_INITIAL_STATE } from '../constants/app.constants';
import { getAllProducts } from '../api/api';
import Products from '../components/Products/Products';

function Main() {
	const [products, setProducts] = useState(PRODUCT_INITIAL_STATE);

	useEffect(() => {
		getAllProducts()
			.then((productsRes) => productsRes.json())
			.then((products) => setProducts(products));
	}, []);

	return (
		<>
			<Products products={products} />
		</>
	);
}

export default Main;
