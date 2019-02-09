// Listen on a specific host via the HOST environment variable
const cors_proxy = require("cors-anywhere");

const host = process.env.HOST || '0.0.0.0',
	port = process.env.PORT || 8081;


cors_proxy.createServer({
	originWhitelist: [], // Allow all origins
	// requireHeader: ['origin', 'x-requested-with'],
	requireHeader: [],
	removeHeaders: ['cookie', 'cookie2'],
	redirectSameOrigin: true
}).listen(port, host, function () {
	console.log('Running CORS Anywhere on ' + host + ':' + port);
});

