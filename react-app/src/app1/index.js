import React from 'react';
import NavBar from './components/navbar';
import ColorPicker from './components/color-picker';
import Title from './components/title';

export default () => {
	const [{r,g,b}, setColor] = React.useState({ r:0, g:0, b:0 });
	return (
		<div className="App">
			<Title text="App 1: Let's use local state" />
			<NavBar color={{r,g,b}} />
			<ColorPicker
				color={{r,g,b}}
				setColor={setColor}
			/>
		</div>
	);
};
