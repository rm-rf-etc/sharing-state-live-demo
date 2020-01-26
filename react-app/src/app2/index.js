import React from 'react';
import NavBar from './components/navbar';
import ColorPicker from './components/color-picker';
import Title from './components/title';

export default () => {
	return (
		<div className="App">
			<Title text="App 2: Let's use redux" />
			<NavBar />
			<ColorPicker />
		</div>
	);
};
