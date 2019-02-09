const noop = () => {}

const fetchFromUrlLong =  async (url, cb = noop, {...requestOpts} = {}) => {
	const response = await fetch(url, requestOpts);
	console.log('form.js -  response: ', response);
	return cb(response);
};

const fetchFromUrl = (url, { ...requestOpts } = {}) => {
	return fetch(url, requestOpts); 
};

const handleReadableStream = (response) => {
	const reader = response.body.getReader()
	const stream = new ReadableStream({
	start(controller) {
		// The following function handles each data chunk
		function push() {
			// "done" is a Boolean and value a "Uint8Array"
			return reader.read().then(({ done, value }) => {
				// Is there no more data to read?
				if (done) {
					// Tell the browser that we have finished sending data
					controller.close();
					return;
				}

				// Get the data and send it to the browser via the controller
				controller.enqueue(value);
			}).then(push);
		};

		push();
	}
})
}

export { fetchFromUrl, fetchFromUrlLong, handleReadableStream};
