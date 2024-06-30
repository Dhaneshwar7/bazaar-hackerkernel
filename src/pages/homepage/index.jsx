import Head from 'next/head';
import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext, useEffect, useState } from 'react';
import Custom404 from '../404';
import ProductForm from '@/components/home/ProductForm';
import ProductCard from '@/components/home/ProductCard';

const Homepage = () => {
	//for checking user availbale or not !! Show 404 page
	const [mounted, setMounted] = useState(false);
	const { state } = useContext(BazaarContext);

	const allProducts = state.products;
	console.log(allProducts);

	useEffect(() => {
		const userAuth = JSON.parse(localStorage.getItem('userAuth'));
		if (userAuth === true) {
			setMounted(true);
		} else {
			setMounted(false);
		}
	}, [mounted]);

	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>
			{mounted ? (
				<>
					<div>Welcome to home page</div>
					<ProductForm />
					{allProducts?.map((data, idx) => (
						<ProductCard key={idx} productDetails={data} />
					))}
				</>
			) : (
				<Custom404 />
			)}
		</>
	);
};

export default Homepage;
