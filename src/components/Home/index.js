import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../Shared/Header";

const Home = ({ products }) => {
	console.log(products);

	if (!products) {
		return <p>Loading...</p>;
	}

	return (
		<article>
			<Header />

			<Container>
				<Row xs={1} md={2} lg={3} className="g-4">
					{products.map((item) => (
						<Col key={item.id}>
							<Card className="h-100">
								<Card.Img variant="top" src={item.image} alt={item.title} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text>{item.description}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<div className="d-flex align-items-center justify-content-between">
										<div className="d-flex align-items-center gap-2 ">
											<img src="star.png" alt="rating" width={18} height={18} />
											<Card.Text>
												{item.rating.rate}/<span className="opacity-75">5</span>
											</Card.Text>
										</div>
										<Card.Text style={{ color: "#f2b01e", fontWeight: "600" }}>
											${item.price}
										</Card.Text>
									</div>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</article>
	);
};

export default Home;
