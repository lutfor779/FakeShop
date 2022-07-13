import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
	const images = [
		"https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1600,h_380/https://www.newgenmax.com/wp-content/uploads/2018/07/Ecommerce-Banner-1.jpg",
		"https://www.wamatechnology.com/wp-content/uploads/2018/06/Tips-Tricks-for-a-better-eCommerce-website-banner-image.jpg",
		"https://webizona.com/wp-content/uploads/2016/12/ecommerce-website-banner.jpg",
	];

	return (
		<Carousel variant="dark">
			{images.map((img) => (
				<Carousel.Item key={img}>
					<img
						className="d-block w-100 carousel-img"
						src={img}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h5>Fake Shop</h5>
						<p>Welcome to fake shop. Enjoy shopping!</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner;
