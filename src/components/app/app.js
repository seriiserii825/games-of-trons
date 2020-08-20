import React from 'react';
import "./app.scss";
import GotService from "../../services/gotServices";
import CharDetails from "../charDetails/charDetails";
import Header from "../header/header";
import ItemList from "../itemList/itemList";
import RandomChar from "../randomChar/randomChar";

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="container">
					<Header/>
					<RandomChar/>
					<div className="index-wrap">
						<ItemList/>
						<CharDetails/>
					</div>
				</div>
			</div>
		);
	}
};