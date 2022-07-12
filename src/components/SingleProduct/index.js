import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
	let params = useParams();

	return (
		<Container>
			<p>This is single product page</p>
		</Container>
	);
};

export default SingleProduct;
