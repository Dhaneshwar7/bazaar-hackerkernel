import React from 'react';

const ProductCard = props => {
	const product = props.productDetails;

	return (
		<>
			<div key={product.id}>
				<p> {product.pName}</p>
				<h1>{product.price}</h1>
			</div>
		</>
	);
};

export default ProductCard;
