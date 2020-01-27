import { createStore } from 'redux';

const state = {
	color: {
		r: 0,
		g: 0,
		b: 0,
	},
};

const reducer = (oldState, action) => {
	switch (action.type) {
		case "SET_COLOR": {
			const newState = { ...oldState };
			newState.color = action.payload;
			return newState;
		}
		default:
			return oldState;
	}
};

const store = createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
export const dispatch = store.dispatch;
