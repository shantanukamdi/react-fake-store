import React, { useState } from 'react';
import AppContext from './AppContext.js';

export const Provider = (props) => {
	const [cart, setCart] = useState([]);

	return <AppContext.Provider value={[cart, setCart]}>{props.children}</AppContext.Provider>;
};
