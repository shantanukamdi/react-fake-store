import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import { Provider } from './context/Provider.js';

const Main = lazy(() => import('./pages/Main/Main'));
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const Cart = lazy(() => import('./pages/Cart/Cart'));

function App() {
	return (
		<>
			<Provider>
				<Router>
					<Header />
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route path='/' exact>
								<Main />
							</Route>

							<Route path='/product-detail/:id'>
								<ProductDetail />
							</Route>

							<Route path='/checkout'>
								<Checkout />
							</Route>

							<Route path='/cart'>
								<Cart />
							</Route>
						</Switch>
					</Suspense>
				</Router>
			</Provider>
		</>
	);
}

export default App;
