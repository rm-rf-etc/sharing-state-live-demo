import React from 'react';
import { ChromePicker } from 'react-color';

export default () => {
	const [{r,g,b}, setColor] = React.useState({ r:0, g:0, b:0 });
	return (
		<div className="col3">
			<ChromePicker
				color={{r,g,b}}
				onChange={({ rgb: {r,g,b} }) => setColor({r,g,b})}
			/>
		</div>
	);
};
