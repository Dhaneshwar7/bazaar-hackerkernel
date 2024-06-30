import React from 'react';

const ProductCard = props => {
	const product = props.productDetails;

	return (
		<>
			<a key={product.id} href={'/'} className="group">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<img
						src={
							'https://plus.unsplash.com/premium_photo-1674747087080-cc5ae3101c8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						className="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 className="mt-4 text-sm text-gray-700">{product.pname}</h3>
				<p className="mt-1 text-lg font-medium text-gray-900">
					{product.price}
				</p>
			</a>
		</>
	);
};

export default ProductCard;
