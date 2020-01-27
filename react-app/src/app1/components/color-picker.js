import React from 'react';
import { ChromePicker } from 'react-color';

export default ({ color: {r,g,b}, setColor }) => {
	return (
		<div className="col3">
			<ChromePicker
				color={{r,g,b}}
				onChange={({ rgb: {r,g,b} }) => setColor({r,g,b})}
			/>
		</div>
	);
};
