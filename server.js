const path = require("path"),
  express = require("express"),
  middlewareProxy = require("http-proxy-middleware"),
  http = require("http"),
  cors_proxy = require("cors-anywhere"),
  host = process.env.HOST || "0.0.0.0",
  port = process.env.PORT || 9000,
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

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// app.listen(port, host, () => {
//   console.log(
//     "Express server listening on port %d in %s mode",
//     this.address().port,
//     app.settings.env
//   ); 

// });


// cors_proxy
//   .createServer({
//     originWhitelist: [], // Allow all origins
//     // requireHeader: ['origin', 'x-requested-with'],
//     requireHeader: [],
//     removeHeaders: ["cookie", "cookie2"],
//     redirectSameOrigin: true
//   })
//   .listen(proxyPort, proxyHost, function () {
//     console.log("proxy listening to " + proxyHost + ":" + proxyPort);
//   });
