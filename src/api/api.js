import { API } from '../constants/app.constants';

function getAllProducts() {
	return fetch(API.PRODUCTS);
}

export { getAllProducts };
