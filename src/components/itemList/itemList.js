import React from 'react';
import "./itemList.scss";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";

export default class ItemList extends React.Component {
	state = {
		charList: []
	};
	gotService = new GotService();

	componentDidMount() {
		this.gotService.getAllCharacters()
			.then((charList) => {
				this.setState({
					charList: charList
				});
			});
	}

	renderItems = (arr) => {
		return arr.map((item, i) => {
			const idStr = item.url;
			const aray = idStr.split('/');
			const id = aray[aray.length - 1];

			return (
				<li onClick={() => this.props.onUpdateCharId(id)} key={i}><span>{item.name}</span></li>
			);
		});
	}

	render() {
		const {charList} = this.state;

		if(!charList){
			return <Spinner/>;
		}

		const listItems = this.renderItems(charList);

		return (

			<ul className="item-list">
				{listItems}
			</ul>
		);
	}
};
