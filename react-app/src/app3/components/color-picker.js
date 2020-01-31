import React from 'react';
import { ChromePicker } from 'react-color';

const color = { r:0, g:0, b:0 };

export default () => {
	return (
		<div className="col3">
			<ChromePicker
				color={color}
				onChange={() => {}}
			/>
		</div>
	);
};
