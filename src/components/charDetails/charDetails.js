import React from 'react';
import "./charDetails.scss";
import GotService from "../../services/gotServices";

export default class CharDetails extends React.Component {
	got = new GotService();

	state = {
		char: null
	}

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.charId !== this.props.charId){
			this.updateChar();
		}
	}

	updateChar() {
		if (!this.props.charId) {
			return;
		}

		this.got.getCharacter(this.props.charId)
			.then((charElem) => {
				this.setState({
					char: charElem
				});
			});
	}


	render() {
		if (!this.state.char) {
			return <span>Click on char</span>;
		}

		const {name, gender, born, die} = this.state.char;

		return (
			<div className="char-details">
				<h2 className="char-details__title">{name}</h2>
				<ul className="char-details__list">
					<li className="char-details__item">
						<span className="char-details__property">Gender</span>
						<span className="char-details__value">{gender}</span>
					</li>
					<li className="char-details__item">
						<span className="char-details__property">Born</span>
						<span className="char-details__value">{born}</span>
					</li>
					<li className="char-details__item">
						<span className="char-details__property">Died</span>
						<span className="char-details__value">{die}</span>
					</li>
				</ul>
			</div>
		);
	}
};
