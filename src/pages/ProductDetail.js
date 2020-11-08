import React, { useEffect, useState, useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { getProductById } from '../api/api';
import AppContext from '../context/AppContext.js';

import './style.css';

function ProductDetail() {
	const { id } = useParams();
	const history = useHistory();
	const [cart, setCart] = useContext(AppContext);
	const [counter, setCounter] = useState(0);
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProductById(id)
			.then((productRes) => productRes.json())
			.then((product) => setProduct(product));
	}, [id]);

	const handleAddProductToCart = (product) => {
		const oldCart = [...cart];
		oldCart.push(product);
		setCart(oldCart);
	};

	const handleIncrementByOne = () => {
		setCounter((prevCount) => prevCount + 1);
	};

	const handleDecrementByOne = () => {
		setCounter((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
	};

	return (
		<div className='product-wrapper'>
			<p className='back-arrow' title='Go Back' onClick={() => history.goBack()}>
				&larr;
			</p>
			{product && (
				<div className='product'>
					<img src={product.image} alt={product.title} />

					<div className='product__content'>
						<div>
							<h3>{product.title}</h3>
							<p>{product.description}</p>
						</div>

						<div className='product__bottom'>
							<div>
								<input type='text' name='quantity' id='quantitiy' value={counter}></input>
								<button onClick={handleIncrementByOne}>
									<i class='material-icons'>add</i>
								</button>
								<button onClick={handleDecrementByOne}>
									<i class='material-icons'>remove</i>
								</button>
							</div>
							<p className='product__price'>$ {product.price}</p>

							<button
								onClick={() => {
									handleAddProductToCart(product);
								}}
							>
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductDetail;
