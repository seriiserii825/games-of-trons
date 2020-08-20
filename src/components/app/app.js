import React from 'react';
import "./app.scss";
import CharDetails from "../charDetails/charDetails";
import Header from "../header/header";
import ItemList from "../itemList/itemList";
import RandomChar from "../randomChar/randomChar";
import ErrorMessage from "../errorMessage/errorMessage";

export default class App extends React.Component {
	state = {
		toggleRandomChar: false,
		charId: 130,
		error: false
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

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: true
		});
	}

	render() {
		const randomChar = !this.state.toggleRandomChar ? <RandomChar/> : null;


		if(this.state.error){
			return <ErrorMessage/>
		}

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