import Head from 'next/head';
import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext, useEffect, useState } from 'react';
import Custom404 from '../404';
import ProductForm from '@/components/home/ProductForm';
import ProductCard from '@/components/home/ProductCard';
import Footer from '@/components/layouts/Footer';

const Homepage = () => {
	//for mount checking user availbale or not !! Show 404 page
	const [mounted, setMounted] = useState(false);
	const { state ,dispatch} = useContext(BazaarContext);
	const [allProducts, setAllProducts] = useState([]);
	const [side, setSide] = useState(state.sidebarForm);

	useEffect(() => {
		setSide(state.sidebarForm);
	}, [state.sidebarForm]);

	useEffect(() => {
		if (state.products) {
			// console.log('search state product tak');
			if (state.searchTerm) {
				// console.log('search term ke andar tak');
				let sProd = state.products;
				const sProducts = sProd.filter(product =>
					product.pname.toLowerCase().includes(state.searchTerm.toLowerCase())
				);
				setAllProducts(sProducts);
				// console.log(allProducts);
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
					<div className="Homepage-box bg-zinc-100 min-h-[86vh] dark:bg-slate-900 flex max-sm:flex-wrap relative">
						{/* <div className="mx-auto flex-none max-w-52 h-full  bg-slate-600 sticky top-0 right-0 py-36">
							<ProductForm />
						</div> */}
						<div className="Productlisting-box mx-auto pt-12  grow w-full h-full max-w-2xl px-8 mb-20 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-12">
							<h2 className=" mb-6 text-black text-2xl dark:text-white py-1 px-3 bg-slate-300  dark:bg-slate-700 rounded ">
								Products
							</h2>
							<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
								{allProducts.length > 0 ? (
									allProducts?.map((data, idx) => (
										<ProductCard
											key={idx}
											productDetails={data}
											index={idx}
										/>
									))
								) : (
									<div className="flex flex-col items-center justify-center h-full col-span-full bg-zinc-400 bg-opacity-5 p-16">
										<div className="text-red-600 dark:text-red-500 text-4xl font-bold text-center">
											No Product Found !!!
										</div>
										<div className="text-black dark:text-white text-lg mt-4 text-center">
											Add products to see them here.
										</div>
									</div>
								)}
							</div>
						</div>
						{/* This is Product Form which handle thorough Add Product from Nav bar */}
						<div
							className={`mx-auto max-w-sm transition px-16 rounded drop-shadow-lg  ease-in-out delay-100 h-full pt-36 pb-60 border-l-[.5px] border-t-[.5px] border-b-slate-600  dark:border-b-slate-900 dark:bg-slate-800  bg-slate-200 sticky top-0 right-0  ${
								state.sidebarForm ? 'scale-0 hidden' : 'scale-100'
							}`}
						>
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
