import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";

function App() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home products={products} />}></Route>
				<Route path="proudcts/:id" element={<SingleProduct />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
