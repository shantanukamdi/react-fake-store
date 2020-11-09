import React, { useEffect, useState, useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { getProductById } from '../../api/api';
import AppContext from '../../context/AppContext.js';

import './ProductDetail.css';

function ProductDetail() {
	const { id } = useParams();
	const history = useHistory();
	const [cart, setCart] = useContext(AppContext);
	const [product, setProduct] = useState({});
	const [disableAddToCartBtn, setDisableAddToCartBtn] = useState(false);

	useEffect(() => {
		getProductById(id)
			.then((productRes) => productRes.json())
			.then((product) => setProduct(product));
	}, [id]);

	const handleAddProductToCart = (product) => {
		const oldCart = [...cart];
		oldCart.push(product);
		setCart(oldCart);
		setDisableAddToCartBtn(true);
	};

	return (
		<div className='product-wrapper'>
			<p className='back-arrow' title='Go Back' onClick={() => history.goBack()}>
				&larr;
			</p>
			{product.id ? (
				<div className='product'>
					<img src={product.image} alt={product.title} />

					<div className='product__content'>
						<div>
							<h3>{product.title}</h3>
							<p>{product.description}</p>
						</div>

						<div className='product__bottom'>
							<p className='product__price'>$ {product.price}</p>

							<button
								onClick={() => {
									handleAddProductToCart(product);
								}}
								className={`btn btn-add-cart`}
								disabled={disableAddToCartBtn}
							>
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			) : (
				<>Loading...</>
			)}
		</div>
	);
}

export default ProductDetail;
