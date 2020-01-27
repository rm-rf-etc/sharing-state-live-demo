import React from 'react';
import { ChromePicker } from 'react-color';
import useSharedState from 'use-simple-shared-state';
import store from '../state';

const { setColor } = store.actions;

export default () => {
	const [color] = useSharedState(store, [s => s.color]);
	return (
		<div className="col3">
			<ChromePicker
				color={color}
				onChange={({ rgb: {r,g,b} }) => setColor({r,g,b})}
			/>
		</div>
	);
};
