import React from 'react';
import "./header.scss";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				Game of trones DB
			</div>
			<ul className="menu">
				<li>
					<a href="">Characters</a>
				</li>
				<li>
					<a href="">Houses</a>
				</li>
				<li>
					<a href="">Books</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
