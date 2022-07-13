import React from "react";
import Header from "../Shared/Header";
import Banner from "./Banner";
import Products from "./Products";

const Home = ({ products }) => {
	if (!products) {
		return <p>Loading...</p>;
	}

	return (
		<article>
			<Header />
			<Banner />
			<Products products={products} />
		</article>
	);
};

export default Home;
