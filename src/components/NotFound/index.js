import React from "react";
import notfound from "../../assets/images/404.gif";

const NotFound = () => {
	return (
		<article
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<img
				src={notfound}
				alt="Loading"
				className="w-100 h-100"
				style={{ objectFit: "contain" }}
			/>
		</article>
	);
};

export default NotFound;
