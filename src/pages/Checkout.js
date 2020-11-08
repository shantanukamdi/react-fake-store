import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

import './style.css';

function Checkout() {
	const history = useHistory();
	const [cart, setCart] = useContext(AppContext);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [credit, setCredit] = useState('');
	const [address, setAddress] = useState('');
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		credit: '',
		address: '',
	});

	const handleNameChange = (e) => {
		const value = e.target.value.trim();
		if (value === '') {
			setErrors({
				...errors,
				name: 'Please Enter Name',
			});
		} else {
			setErrors({
				...errors,
				name: '',
			});
		}
		setName(value);
	};

	const handleEmailChange = (e) => {
		const value = e.target.value.trim();
		if (value === '') {
			setErrors({
				...errors,
				email: 'Please Enter Email',
			});
		} else {
			setErrors({
				...errors,
				email: '',
			});
		}
		setEmail(value);
	};

	const handleCreditChange = (e) => {
		const value = e.target.value.trim();
		if (value === '') {
			setErrors({
				...errors,
				credit: 'Please Enter Credit Card Number',
			});
		} else {
			setErrors({
				...errors,
				credit: '',
			});
		}
		setCredit(value);
	};

	const handleAddressChange = (e) => {
		const value = e.target.value.trim();
		if (value === '') {
			setErrors({
				...errors,
				address: 'Please Enter Address',
			});
		} else {
			setErrors({
				...errors,
				address: '',
			});
		}
		setAddress(value);
	};

	const validateName = () => {
		if (!name) {
			setErrors({
				...errors,
				name: 'Please Enter Name',
			});
		} else {
			setErrors({
				...errors,
				name: '',
			});
		}
	};

	const validateEmail = () => {
		if (!email) {
			setErrors({
				...errors,
				email: 'Please Enter Email',
			});
		} else {
			setErrors({
				...errors,
				email: '',
			});
		}
	};

	const validateCreditCard = () => {
		if (!credit) {
			setErrors({
				...errors,
				credit: 'Please Enter Credit Card Number',
			});
		} else {
			setErrors({
				...errors,
				credit: '',
			});
		}
	};

	const validateAddress = () => {
		if (!address) {
			setErrors({
				...errors,
				address: 'Please Enter Address',
			});
		} else {
			setErrors({
				...errors,
				address: '',
			});
		}
	};

	const formSubmit = (e) => {
		e.preventDefault();
		console.group('Order is ');
		console.log('Name', name);
		console.log('Email', email);
		console.log('Credit Card', credit);
		console.log('Address', address);
		console.groupEnd();

		const clickedValue = window.confirm('Order placed successfully. Navigating to Products page.');
		if (clickedValue) {
			history.push('/');
			setCart([]);
		}
	};

	const isFormValid = () => {
		if (!name || !email || !credit || !address) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className='checkout-form'>
			<h2>Checkout</h2>
			<form onSubmit={formSubmit}>
				<div className='form-control'>
					<label htmlFor='name'>Name *</label>
					<input id='name' type='text' value={name} onChange={handleNameChange} onBlur={validateName} />
					<p className='text-danger'>{errors.name === '' ? <></> : errors.name}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='email'>Email *</label>
					<input id='email' type='email' value={email} onChange={handleEmailChange} onBlur={validateEmail} />
					<p className='text-danger'>{errors.email === '' ? <></> : errors.email}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='credit'>Credit Card Number *</label>
					<input id='credit' type='text' value={credit} onChange={handleCreditChange} onBlur={validateCreditCard} />
					<p className='text-danger'>{errors.creedit === '' ? <></> : errors.credit}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='address'>Address *</label>
					<textarea rows='5' id='address' value={address} onChange={handleAddressChange} onBlur={validateAddress}></textarea>
					<p className='text-danger'>{errors.address === '' ? <></> : errors.address}</p>
				</div>

				<button type='submit' disabled={isFormValid()}>
					Buy
				</button>
			</form>
		</div>
	);
}

export default Checkout;
