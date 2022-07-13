import React from "react";
import loading from "../../assets/images/loading.gif";

const Loading = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<img src={loading} alt="Loading" />
		</div>
	);
};

export default Loading;
