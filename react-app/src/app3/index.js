import React from 'react';
import NavBar from './components/navbar';
import ColorPicker from './components/color-picker';
import Title from './components/title';
import { Provider } from './context';

const state = {
	color: {
		r:0,
		g:0,
		b:0,
	},
};

export default () => {
	const [{ color }, setColor] = React.useState(state);
	return (
		<Provider value={{ color, setColor }}>
			<div className="App">
				<Title text="App 3: Let's use react context" />
				<NavBar />
				<ColorPicker />
			</div>
		</Provider>
	);
};
