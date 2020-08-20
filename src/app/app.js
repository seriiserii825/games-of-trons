import React from 'react';
import "./app.scss";

const App = () => {
	const getResource = async (url) => {
		const res = await fetch(url);
		return res.json();
	};

	getResource('https://jsonplaceholder.typicode.com/posts/22')
		.then(res => console.log('Success', res))
		.catch((error) => console.log('Error', error))

	return (
		<div className="app">
			<h1>My app</h1>
		</div>
	);
};

export default App;
