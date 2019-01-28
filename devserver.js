const path = require('path'); 
const express = require('express'); 
const cors = require("cors");
const webpack = require("webpack")
const dev_middleware = require("webpack-dev-middleware");
const devConfig = require("./webpack.dev");

// const compiler = webpack(config);
// const app = express(), 
// 	DIST_DIR = path.resolve(__dirname, 'src/assets'), 
// 	HTML_FILE = path.resolve(DIST_DIR, 'index.html');

const app = express(),
	DEV_DIR = path.resolve(__dirname, 'src/'),
	HTML_FILE = path.resolve(DEV_DIR, 'index.html');

app.options('*', cors());
app.use(cors());
// app.get('*', (req, res) => {
// 	res.sendFile(HTML_FILE)
// })

app.listen(8888, () => {
	console.log('server.js listening to port 8888');
});

