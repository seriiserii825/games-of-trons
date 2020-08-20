import React from "react";
import "./spinner.scss";
import spinnerImg from "./spinner.gif";

const Spinner = () => {
	return (
		<img className="spinner" src={spinnerImg} alt=""/>
	)
};
export default Spinner;