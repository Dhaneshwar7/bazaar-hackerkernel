// import { createContext, useMemo, useReducer } from 'react';

// const reducer = (state, action)=>{
//   switch (action.type){
//     case 'ADD':
//         return
//   }  
// }


// // Created Context for Cart store where we can see all the Cart added product
// export const CartContext = createContext();

// // Created this is Wrapper which will be using in whole project to change state,dispatch 
// export const CartProvider = ({ children }) => {
// 	const [state, dispatch] = useReducer(reducer, []);

// 	const contextValue = useMemo(() => {
// 		return { state, dispatch };
// 	}, [state, dispatch]);

// 	return (
// 		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
// 	);
// };
