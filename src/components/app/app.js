import React from 'react';
import "./app.scss";
import GotService from "../../services/gotServices";
import CharDetails from "../charDetails/charDetails";
import Header from "../header/header";
import ItemList from "../itemList/itemList";
import RandomChar from "../randomChar/randomChar";
import headerImg from "../../img/game-of-trones.jpg";

export default class App extends React.Component {
	render() {
		const res = new GotService();
		res.getAllCharacters()
			.then(res => console.log('Success', res))
			.catch((error) => console.error(error))
		res.getCharacter(130)
			.then(res => console.log(res))

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