import React from 'react';
import NavBar from './components/navbar';
import ColorPicker from './components/color-picker';
import Title from './components/title';
import { Provider } from 'react-redux';
import store from './store';

export default () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Title text="App 2: Let's use redux" />
				<NavBar />
				<ColorPicker />
			</div>
		</Provider>
	);
};
