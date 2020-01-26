import React from 'react';
import NavBar from './components/navbar';
import ColorPicker from './components/color-picker';
import Title from './components/title';

export default () => {
	return (
		<div className="App">
			<Title text="App 4: Let's use simple shared state" />
			<NavBar />
			<ColorPicker />
		</div>
	);
};
