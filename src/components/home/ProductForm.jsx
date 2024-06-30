import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const ProductForm = () => {
	const { state, dispatch } = useContext(BazaarContext);
	const [productArr, setProductArr] = useState([]);
	const [product, setProduct] = useState({ pname: '', price: '' });

	const productAddHandle = e => {
		e.preventDefault();
		const finalProduct = { ...product, id: uuidv4() };
		// setProductArr([...productArr, finalProduct]);
		setProduct({ pname: '', price: '' });

		// No product duplicacy checking code is here 
        const existingProduct = 

		dispatch({
			type: 'ADDPRODUCT',
			id: finalProduct.id,
			pname: product.pname,
			price: product.price,
		});
		// console.log(productArr);
	};
	const productChange = e => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};
	return (
		<>
			<form onSubmit={productAddHandle}>
				<label
					htmlFor="pname"
					className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
				>
					Product Name
				</label>
				<input
					placeholder="Enter your Product Name"
					onChange={productChange}
					value={product.pname}
					name="pname"
					type="text"
					required
					className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-4 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
				/>
				<label
					htmlFor="price"
					className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
				>
					Price
				</label>
				<input
					placeholder="Enter your Product Price"
					onChange={productChange}
					value={product.price}
					name="price"
					type="text"
					required
					className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-4 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
				/>
				<button
					type="submit"
					className="border m-auto  text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-gray-500 to-zinc-300 hover:text-gray-100"
				>
					Add Product
				</button>
			</form>
			<div>
				{/* {productArr.map((eProd, idx) => (
					<div key={eProd.id}>
						<p> {eProd.pname}</p>
						<h1>{eProd.price}</h1>
					</div>
				))} */}
			</div>
		</>
	);
};

export default ProductForm;
