import Head from 'next/head';
import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext, useEffect, useState } from 'react';
import Custom404 from '../404';
import ProductForm from '@/components/home/ProductForm';
import ProductCard from '@/components/home/ProductCard';
import Footer from '@/components/layouts/Footer';

const Homepage = () => {
	//for checking user availbale or not !! Show 404 page
	const [mounted, setMounted] = useState(false);
	const { state } = useContext(BazaarContext);
	const [allProducts, setAllProducts] = useState([]);
	console.log(`this searhc${state.searchTerm}`);

	useEffect(() => {
		console.log(state.searchTerm);
		if (state.products) {
			console.log('search state product tak');
			if (state.searchTerm) {
				console.log('search term ke andar tak');
				let sProd = state.products;
				const sProducts = sProd.filter(product =>
					product.pname.toLowerCase().includes(state.searchTerm.toLowerCase())
				);
				setAllProducts(sProducts);
			} else {
				setAllProducts(state.products);
			}
		}
	}, [state.searchTerm, state.products]);

	useEffect(() => {
		const userAuth = JSON.parse(localStorage.getItem('userAuth'));
		if (userAuth === true) {
			setMounted(true);
		} else {
			setMounted(false);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>
			{mounted ? (
				<>
					{/* <div>Welcome to home page</div> */}
					<div className="ProductListing bg-white min-h-[86vh] flex max-sm:flex-wrap relative">
						<div className="mx-auto flex-none max-w-52 h-full  bg-slate-600 sticky top-0 right-0 py-36">
							<ProductForm />
						</div>
						<div className="mx-auto grow w-full h-full max-w-2xl px-8 mb-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-12">
							<h2 className=" mb-6 text-black text-2xl">Products</h2>
							<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
								{allProducts.length > 0 ? (
									allProducts?.map((data, idx) => (
										<ProductCard key={idx} productDetails={data} />
									))
								) : (
									<div className="text-black">“No Product Found”</div>
								)}
							</div>
						</div>
						<div className="mx-auto flex-none max-w-xs h-full py-36 bg-slate-600 sticky top-0 right-0">
							<ProductForm />
						</div>
						<div className="absolute w-full bottom-0">
							<Footer />
						</div>
					</div>
				</>
			) : (
				<Custom404 />
			)}
		</>
	);
};

export default Homepage;
