import { createContext, useMemo, useReducer } from 'react';

const initialState = {
	products: [],
	cart: [],
	searchTerm: '',
	error: '',
	sidebarForm: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADDPRODUCT':
			return {
				...state,
				products: [
					...state.products,
					{
						id: action.id,
						pname: action.pname,
						price: action.price,
					},
				],
			};
		case 'ADD_TO_CART':
			return {
				...state,
				products: [
					...state.cart,
					{
						id: action.id,
						pName: action.pname,
						price: action.price,
					},
				],
			};
		case 'SET_SEARCH_TERM':
			return {
				...state,
				searchTerm: action.term,
			};
		case 'SET_PRODUCT_SLIDE':
			return {
				...state,
				sidebarForm: action.sidebar,
			};
		case 'REMOVE_PRODUCT':
			let updatedProducts = [...state.products];
			updatedProducts.splice(action.index, 1);
			return {
				...state,
				products: updatedProducts,
			};

		default:
			return state;
	}
};

// Created Context for Cart store where we can see all the Cart added product
export const BazaarContext = createContext();

// Created this is Wrapper which will be using in whole project to change state,dispatch
export const BazaarProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const productValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return (
		<BazaarContext.Provider value={productValue}>
			{children}
		</BazaarContext.Provider>
	);
};
