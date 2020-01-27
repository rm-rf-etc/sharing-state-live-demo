import React, { useContext } from 'react';
import { ChromePicker } from 'react-color';
import { context } from '../context';

export default () => {
	const { color, setColor } = useContext(context);
	return (
		<div className="col3">
			<ChromePicker
				color={color}
				onChange={({ rgb: {r,g,b} }) => setColor({ color: {r,g,b} })}
			/>
		</div>
	);
};
