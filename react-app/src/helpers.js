
export const rgb2hex = (...args) => {
	return args.map((val) => {
		let hex = Number(val).toString(16);
		if (hex.length < 2) {
			hex = "0" + hex;
		}
		return hex;
	}).join('');
};
