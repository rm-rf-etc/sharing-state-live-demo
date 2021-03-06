import React from 'react';
import { rgb2hex } from '../../helpers';

let r = 0;
let g = 0;
let b = 0;

export default () => {
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
