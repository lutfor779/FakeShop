import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Loading from "../Shared/Loading";
import InnerBanner from "./InnerBanner";

const number = [1, 2, 3, 4, 5];

const SingleProduct = () => {
	const [product, setProduct] = useState(null);
	let params = useParams();
	const { id } = params;

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data))
			.catch((e) => console.log(e));
	}, [id]);

	if (!product) {
		return <Loading />;
	}

	const { category, description, image, price, rating, title } = product;
	return (
		<article>
			<div style={{ minHeight: "91vh" }}>
				<Header />
				<InnerBanner />
				<Container>
					<Row xs={1} md={2} className="g-4 mt-3">
						<Col>
							<img src={image} alt={title} className="p-3 w-100 productImage" />
						</Col>

						<Col className="p-3 d-flex align-items-center shadow rounded">
							<div className="m-auto">
								<h4>{title}</h4>
								<p>Category: {category}</p>
								<p className="m-0 p-0 h5">${price}</p>
								<div>
									{number.map((item) => (
										<span
											key={item}
											className={`fa fa-star ${
												Math.round(rating.rate) >= item && "checked"
											} me-1 `}
										></span>
									))}
									<span className="text-secondary">
										<small>({rating.count})</small>
									</span>
								</div>

								<p className="mt-3">{description}</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</article>
	);
};

export default SingleProduct;
