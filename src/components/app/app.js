import React from 'react';
import "./app.scss";
import GotService from "../../services/gotServices";
import CharDetails from "../charDetails/charDetails";
import Header from "../header/header";
import ItemList from "../itemList/itemList";
import RandomChar from "../randomChar/randomChar";

export default class App extends React.Component {
	state = {
		toggleRandomChar: false,
		charId: 130
	}
	onToggleRandomChar = () => {
		this.setState({
			toggleRandomChar: !this.state.toggleRandomChar
		});
	}

	onUpdateCharId = (charId) => {
		this.setState({
			charId: charId
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
						<ItemList onUpdateCharId={this.onUpdateCharId} />
						<CharDetails charId={this.state.charId} />
					</div>
				</div>
			</div>
		);
	}
};