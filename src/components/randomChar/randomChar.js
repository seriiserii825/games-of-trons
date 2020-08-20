import React from 'react';
import "./randomChar.scss";
import GotService from "../../services/gotServices";

export default class RandomChar extends React.Component {
	constructor(props) {
		super(props);
		this.updateChar();
	}

	got = new GotService();

	state = {
		name: null,
		gender: null,
		born: null,
		died: null,
		culture: null
	}

	updateChar() {
		const id = Math.floor(Math.random()*140 + 25);
		this.got.getCharacter(id)
			.then((char) => {
				this.setState({
					name: char.name,
					gender: char.gender,
					born: char.born,
					died: char.died,
					culture: char.culture
				});
			});
	}

	render() {
		const {name, gender, born, died, culture} = this.state;
		return (
			<div className="random-char panel">
				<h2 className="random-char__title">Random Character: {name}</h2>
				<ul className="random-char__list">
					<li className="random-char__item">
						<span className="random-char__property">Gender</span>
						<span className="random-char__value">{gender}</span>
					</li>
					<li className="random-char__item">
						<span className="random-char__property">Born</span>
						<span className="random-char__value">{born}</span>
					</li>
					<li className="random-char__item">
						<span className="random-char__property">Died</span>
						<span className="random-char__value">{died}</span>
					</li>
					<li className="random-char__item">
						<span className="random-char__property">Culture</span>
						<span className="random-char__value">{culture}</span>
					</li>
				</ul>
			</div>
		);
	}
};
