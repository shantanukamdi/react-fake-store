import { API } from '../constants/app.constants';

function getAllProducts() {
	return fetch(API.PRODUCTS);
}

function getProductById(id) {
	return fetch(`${API.PRODUCTS}/${id}`);
}

export { getAllProducts, getProductById };
