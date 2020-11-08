import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';

import './style.css';

function Cart() {
	const history = useHistory();
	const [cart, setCart] = useContext(AppContext);

	const getProductTotal = () => {
		let total = 0;
		for (let i = 0; i < cart.length; i++) {
			total += cart[i].price;
		}
		return total;
	};

	const handleNavToCheckout = () => {
		history.push('/checkout');
	};

	return (
		<div className='cart-wrapper'>
			{cart && cart.length > 0 ? (
				<div className='cart'>
					{cart.map((item) => {
						const { title, image, price, description } = item;

						return (
							<div className='cart-item'>
								<input type='checkbox' />
								<img src={image} alt={title} />

								<div>
									<p>{title}</p>

									<p>{description}</p>

									<p>{price}</p>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<></>
			)}

			<div className='cart-buy'>
				Subtotal: {getProductTotal()}
				<button onClick={handleNavToCheckout}>Proceed to Buy</button>
			</div>
		</div>
	);
}

export default Cart;
