import React, { useEffect, useState } from 'react';
import { PRODUCT_INITIAL_STATE } from '../constants/app.constants';
import { getAllProducts } from '../api/api';
import Products from '../components/Products/Products';
import BankDiscounts from '../assets/bank_discounts.jpg';

function Main() {
	const [products, setProducts] = useState(PRODUCT_INITIAL_STATE);

	useEffect(() => {
		getAllProducts()
			.then((productsRes) => productsRes.json())
			.then((products) => setProducts(products));
	}, []);

	return (
		<>
			<img src={BankDiscounts} alt='Bank Offers' style={{ width: '100%' }} />
			<Products products={products} />
		</>
	);
}

export default Main;
