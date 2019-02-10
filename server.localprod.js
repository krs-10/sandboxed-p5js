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
  target: "http://localhost:9001", // target host
  changeOrigin: true, // needed for virtual hosted sites
  secure: false,
  pathRewrite: { "^/proxied": "" }
};

const proxyMiddleware = middlewareProxy(proxyOptions);
app.use("/proxied", proxyMiddleware);


app.use(express.static(DIST_DIR));

app.listen(port, host, () => {
  console.log("server.js listening to " + host + ":" + port);
});


cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    requireHeader: [],
    removeHeaders: ["cookie", "cookie2"],
    redirectSameOrigin: true,
    // redirectSameOrigin: true,
    // httpProxyOptions: {
    //   // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
    //   xfwd: false,
    // },
  })
  .listen(proxyPort, proxyHost, function () {
    console.log("proxy listening to " + proxyHost + ":" + proxyPort);
  });
