import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const ProductForm = () => {
	const { state, dispatch } = useContext(BazaarContext);
	const [productArr, setProductArr] = useState();
	const [product, setProduct] = useState({ pname: '', price: '' });

	useEffect(() => {
		setProductArr(state.products);
	}, [state.products]);

	const productAddHandle = async e => {
		e.preventDefault();

		const finalProduct = { ...product, id: uuidv4() };

		// No product duplicacy checking code is here
		const existingProduct = productArr.find(
			checkProduct => checkProduct.pname === product.pname
		);
		if (existingProduct) {
			alert('Product is Already Available with this Name');
			return;
		}
		dispatch({
			type: 'ADDPRODUCT',
			id: finalProduct.id,
			pname: product.pname,
			price: product.price,
		});
		// For Clearing Input fields
		setProduct({ pname: '', price: '' });
	};
	const productChange = e => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className="container bg-transparent pb-48 max-sm:pb-3 w-full max-w-lg ">
				<h2 className=" mb-6 text-black text-lg font-bold max-sm:text-base max-sm:mb-2 dark:text-white py-1 px-3 bg-slate-300  dark:bg-slate-700 rounded ">
					Fill Products Details
				</h2>
				<form onSubmit={productAddHandle} className='bg-slate-300 p-4 max-sm:py-2 rounded dark:bg-slate-500'>
					<label
						htmlFor="pname"
						className="block text-gray-800 dark:text-gray-300 text-sm font-bold mb-2"
					>
						Product Name
					</label>
					<input
						placeholder="Product Name"
						onChange={productChange}
						value={product.pname}
						name="pname"
						type="text"
						required
						className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-4 focus:border-indigo-700 text-gray-800 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
					/>
					<label
						htmlFor="price"
						className="block text-gray-800 mt-3  dark:text-gray-300 text-sm font-bold mb-2"
					>
						Price
					</label>
					<input
						placeholder="Product Price"
						onChange={productChange}
						value={product.price}
						name="price"
						type="number"
						required
						className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-4 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
					/>
					<button
						type="submit"
						className="border m-auto max-sm:text-base max-sm:px-4 max-sm:py-1  mt-3 self-center text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-green-800 to-green-700 hover:text-gray-100"
					>
						Add Product
					</button>
				</form>
			</div>

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
