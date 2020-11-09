import React, { useContext, useState, useEffect } from 'react';

import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

import './Cart.css';

function Cart() {
	const history = useHistory();
	const [cart, setCart] = useContext(AppContext);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < cart.length; i++) {
			total += cart[i].price;
		}
		setCartTotal(total.toFixed(2));
	}, []);

	const handleNavToCheckout = () => {
		history.push('/checkout');
	};

	const handleQuantityOnChange = (evt, product) => {
		let total = 0;
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].id === product.id) {
				total += cart[i].price * evt.target.value;
			} else {
				total += cart[i].price;
			}
		}
		setCartTotal(total.toFixed(2));
	};

	return (
		<div className='cart-wrapper'>
			{cart && cart.length > 0 ? (
				<div className='cart'>
					{cart.map((item) => {
						const { title, image, price, description } = item;

						return (
							<div className='cart-item'>
								<img src={image} alt={title} />

								<div>
									<p>{title}</p>

									<p>{description}</p>

									<div className='cart-price-quantity'>
										<label for='quantity'>Quantity: </label>
										<select
											name='quantity'
											id='quantity'
											onChange={(e) => {
												handleQuantityOnChange(e, item);
											}}
										>
											{[1, 2, 3, 4, 5].map((el, index) => {
												return (
													<option key={index} value={el}>
														{el}
													</option>
												);
											})}
										</select>
										<p>{price}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<></>
			)}

			<div className='cart-buy'>
				<h3>Subtotal </h3>
				<h3>$ {cartTotal}</h3>
				<button onClick={handleNavToCheckout}>Proceed to Buy</button>
			</div>
		</div>
	);
}

export default Cart;
