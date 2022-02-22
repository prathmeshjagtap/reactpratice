import React, { useState } from "react";

function AddtoCart() {
	const productDb = [
		{
			id: 1,
			name: "product 1",
		},
		{
			id: 2,
			name: "product 2",
		},
		{
			id: 3,
			name: "product 3",
		},
	];
	const [cartProducts, setCartProducts] = useState([]);

	const addTocart = (product) => {
		const index = cartProducts.findIndex(
			(currentItem) => currentItem.id === product.id
		);
		if (index === -1) {
			setCartProducts([...cartProducts, { ...product, count: 1 }]);
		} else {
			// setCartProducts(
			// 	cartProducts.map((cartitem) =>
			// 		cartitem.id === product.id
			// 			? { ...cartitem, count: cartitem.count + 1 }
			// 			: cartitem
			// 	)
			// );
			setCartProducts([
				...cartProducts.slice(0, index),
				{ ...product, count: cartProducts[index].count + 1 },
				...cartProducts.slice(index + 1),
			]);
		}
	};

	return (
		<div className="container">
			{productDb.map((product) => (
				<li key={product.id}>
					<span>{product.name}</span>
					<button onClick={() => addTocart(product)}>Add to cart</button>
				</li>
			))}
			{cartProducts.map((product) => (
				<li key={product.id}>
					<span>
						{product.name} has {product.count} items
					</span>
				</li>
			))}
		</div>
	);
}

export default AddtoCart;

// Show a list of items with add to cart button
// Clicking on the button should add that item to cart.
// Show the cart below with items added.
// Clicking on the same item twice should add more items in cart.
// CHALLENGE : increase the count of the item in cart without adding it to list.
