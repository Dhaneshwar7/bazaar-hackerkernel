import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext } from 'react';

const ProductCard = ({ productDetails, onDelete, index }) => {
	const { dispatch } = useContext(BazaarContext);
	const product = productDetails;
	// console.log(index);

	return (
		<>
			<div
				key={product.id}
				href={'#'}
				className="group bg-slate-300 rounded drop-shadow-xl dark:bg-neutral-300  p-3"
			>
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<img
						src={
							'https://plus.unsplash.com/premium_photo-1674747087080-cc5ae3101c8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						className="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 className="mt-4 text-sm text-gray-700">{product.pname}</h3>
				<div className="flex justify-between items-center">
					<p className="mt-1 text-lg font-medium text-gray-900">
						{product.price}
					</p>
					<button
						onClick={() => dispatch({ type: 'REMOVE_PRODUCT', index:index })}
						className="w-full md:w-auto px-2 py-2 items-end  bg-slate-900 dark:bg-slate-100 hover:bg-red-300 dark:text-black  border-black border-[.5px] text-white fill-white active:scale-95 duration-100 will-change-transform overflow-hidden relative rounded-xl transition-all"
					>
						<span className="text-sm  hover:text-gray-600 flex items-center justify-between gap-1 font-semibold whitespace-nowrap truncate mx-auto">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="currentColor"
							>
								<path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
