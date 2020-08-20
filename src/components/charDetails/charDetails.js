import React from 'react';
import "./charDetails.scss";

const CharDetails = () => {
	return (
		<div className="char-details">
			<h2 className="char-details__title">John Smith</h2>
			<ul className="char-details__list">
				<li className="char-details__item">
					<span className="char-details__property">Gender</span>
					<span className="char-details__value">male</span>
				</li>
				<li className="char-details__item">
					<span className="char-details__property">Born</span>
					<span className="char-details__value">1783</span>
				</li>
				<li className="char-details__item">
					<span className="char-details__property">Died</span>
					<span className="char-details__value">1820</span>
				</li>
			</ul>
		</div>
	);
};

export default CharDetails;
