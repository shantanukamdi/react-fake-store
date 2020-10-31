import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Checkout from './pages/Checkout';
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<Main />
				</Route>

				<Route path='/product-detail/:id'>
					<ProductDetail />
				</Route>

				<Route path='/checkout'>
					<Checkout />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
