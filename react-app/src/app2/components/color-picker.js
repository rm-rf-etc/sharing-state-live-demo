import React from 'react';
import { ChromePicker } from 'react-color';
import { useSelector } from 'react-redux';
import { setColor } from '../actions';
import { dispatch } from '../store';

export default () => {
	const {r,g,b} = useSelector((state) => state.color);
	return (
		<div className="col3">
			<ChromePicker
				color={{r,g,b}}
				onChange={({ rgb: {r,g,b} }) => dispatch(setColor({r,g,b}))}
			/>
		</div>
	);
};
