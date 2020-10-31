import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
const Main = lazy(() => import('./pages/Main'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));

function App() {
	return (
		<Router>
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
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
