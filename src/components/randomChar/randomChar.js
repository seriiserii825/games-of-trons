import React from 'react';
import "./randomChar.scss";

const RandomChar = () => {
	return (
		<div className="random-char panel">
			<h2 className="random-char__title">Random Character: John</h2>
			<ul className="random-char__list">
				<li className="random-char__item">
					<span className="random-char__property">Gender</span>
					<span className="random-char__value">male</span>
				</li>
				<li className="random-char__item">
					<span className="random-char__property">Born</span>
					<span className="random-char__value">11.03.1039</span>
				</li>
				<li className="random-char__item">
					<span className="random-char__property">Died</span>
					<span className="random-char__value">11.03.1099</span>
				</li>
				<li className="random-char__item">
					<span className="random-char__property">Culture</span>
					<span className="random-char__value">Anarchy</span>
				</li>
			</ul>
		</div>
	);
};

export default RandomChar;
