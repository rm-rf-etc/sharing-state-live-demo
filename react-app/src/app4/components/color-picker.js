import React from 'react';
import { ChromePicker } from 'react-color';

export default () => {
	const [color, setColor] = React.useState({ r:0, g:0, b:0 });
	return (
		<div className="col3">
			<ChromePicker
				color={color}
				onChange={({ rgb }) => setColor(rgb)}
			/>
		</div>
	);
};
