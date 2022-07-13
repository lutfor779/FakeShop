import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
	const navigate = useNavigate();

	return (
		<Container className="pt-5">
			<h4>Latest Products</h4>
			<Row xs={1} md={2} lg={3} className="g-4">
				{products.map((item) => (
					<Col key={item.id}>
						<Card
							className="h-100"
							onClick={() => navigate(`proudcts/${item.id}`, { replace: true })}
						>
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
	);
};

export default Products;
