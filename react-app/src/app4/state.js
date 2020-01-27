import { Store } from 'simple-shared-state';

const state = {
	color: {
		r:0,
		g:0,
		b:0,
	},
};

const actions = () => ({
	setColor: (color) => ({ color }),
});

export default new Store(state, actions);
