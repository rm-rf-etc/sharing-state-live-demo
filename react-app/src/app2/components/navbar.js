import React from 'react';
import { rgb2hex } from '../../helpers';
import { useSelector } from 'react-redux';

export default () => {
	const {r,g,b} = useSelector(s => s.color);
	return (
		<div
			className="col col1 text-mix-blend"
			style={{
				backgroundColor: `rgb(${r}, ${g}, ${b})`,
				color: `rgb(${255 - r}, ${255 - g}, ${255 - b})`
			}}
		>
			<span>{rgb2hex(r, g, b)}</span>
		</div>
	);
};
