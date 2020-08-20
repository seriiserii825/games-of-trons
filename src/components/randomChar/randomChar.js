import React from 'react';
import "./randomChar.scss";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

export default class RandomChar extends React.Component {
	constructor(props) {
		super(props);
		this.updateChar();
		this.state = {
			char: {},
			loading: true,
			error: false
		}
	}

	got = new GotService();

	onError = () => {
		this.setState({
			loading: false,
			error: true
		});
	}

	updateChar() {
		const id = Math.floor(Math.random() * 140 + 25);
		// const id = 14444444;
		this.got.getCharacter(id)
			.then((char) => {
				this.setState({
					char: char,
					loading: false
				})
			})
			.catch(this.onError);
	}

	render() {
		const {char , loading, error} = this.state;
		const spinner = loading ? <Spinner/> : null;
		const errorMessage = error ? <ErrorMessage/> : null;
		const content = !(loading || error) ? <View char={char}/> : null;
		return (
			<div className="random-char panel">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
};

const View = ({char}) => {
	const {name, gender, born, died, culture} = char;
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}