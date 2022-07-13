import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Loading from "../Shared/Loading";
import Banner from "./Banner";
import Products from "./Products";

const Home = ({ products }) => {
	if (!products) {
		return <Loading />;
	}

	return (
		<article>
			<Header />
			<Banner />
			<Products products={products} />
			<Footer />
		</article>
	);
};

export default Home;
