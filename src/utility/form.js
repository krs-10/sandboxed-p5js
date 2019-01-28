const noop = () => {}

const fetchFromUrl = async (url, cb = noop, {...requestOpts} = {}) => {
	const response = await fetch(url, requestOpts); 

	console.log('form.js -  response: ', response);

	return cb(response);
};

export { fetchFromUrl};
