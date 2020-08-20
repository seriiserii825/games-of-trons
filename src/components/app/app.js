import React from 'react';
import "./app.scss";
import GotService from "../../services/gotServices";
import CharDetails from "../charDetails/charDetails";
import Header from "../header/header";
import ItemList from "../itemList/itemList";
import RandomChar from "../randomChar/randomChar";

export default class App extends React.Component {
	state = {
		toggleRandomChar: false
	}
	onToggleRandomChar = () => {
		this.setState({
			toggleRandomChar: !this.state.toggleRandomChar
		});
	}

	render() {
		const randomChar = !this.state.toggleRandomChar ? <RandomChar/> : null;
		return (
			<div className="app">
				<div className="container">
					<Header/>
					{randomChar}
					<button className="toggleRandomChar" onClick={this.onToggleRandomChar}>Toggle random char</button>
					<div className="index-wrap">
						<ItemList/>
						<CharDetails/>
					</div>
				</div>
			</div>
		);
	}
};