import React from 'react';
import "./errorMessage.scss";
import errorImg from "./errorMessage.jpg";

const ErrorMessage = () => {
	return (
		<div className="error-message">
			<img src={errorImg} alt=""/>
			<span>Something is going wrong!!!</span>
		</div>
	);
};

export default ErrorMessage;

