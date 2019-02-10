const path = require("path"),
  express = require("express"),
  middlewareProxy = require("http-proxy-middleware"),
  http = require("http"),
  host = process.env.HOST || "0.0.0.0",
  port = process.env.PORT || 8080,
  proxyHost = "127.0.0.1",
  proxyPort = 9001;



const app = express(),
  DIST_DIR = path.resolve(__dirname, "build"),
  HTML_FILE = path.resolve(DIST_DIR, "index.html");

const proxyOptions = {
  target: "https://ml5-krs10.herokuapp.com", // target host
  changeOrigin: true, // needed for virtual hosted sites
  secure: false,
  pathRewrite: { "^/proxied": "" }
};

const proxyMiddleware = middlewareProxy(proxyOptions);
app.use("/proxied", proxyMiddleware);


app.use(express.static(DIST_DIR));

// app.listen(process.env.PORT || 8080, () => {
//   console.log('server.js -  this: ', this);
//   console.log(
//     "Express server listening on port %d in %s mode",
//     app.address().port,
//     app.settings.env
//   );
// });

// app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('server.js -  this: ', this);
  console.log('server.js -  app: ', app);
  console.log(
    "Express server listening on port %d in %s mode",
    process.env.PORT || 8080,
    app.settings.env
  );
});

// app.listen = function () {
//   var server = http.createServer(this);
//   console.log('server.js -  this: ', this);
//   console.log('server.js -  server: ', server);
//   console.log('server.js -  server.address: ', server.address);

//   return server.listen.apply(server, {});
// };

// app.listen(process.env.PORT || 8080);
